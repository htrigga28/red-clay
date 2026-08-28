"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import type { Product } from "@/content/coffees";
import { getProductById } from "@/content/coffees";

export type BagItem = {
  id: Product["id"];
  /** Stable identity for one product + format + grind line. */
  lineKey?: string;
  slug: string;
  region: string;
  assetId: string;
  kind: Product["kind"];
  quantity: number;
  /** The selected sellable variant. These remain optional for older saved bag items. */
  format?: string;
  grind?: string;
  price?: number | null;
  currency?: string | null;
};

export type BagVariant = Pick<BagItem, "format" | "grind">;

type BagContextValue = {
  items: BagItem[];
  count: number;
  isOpen: boolean;
  announcement: string;
  add: (product: Product, quantity?: number, trigger?: HTMLElement | null, variant?: BagVariant) => void;
  increment: (lineKey: string) => void;
  decrement: (lineKey: string) => void;
  remove: (lineKey: string) => void;
  undoRemove: () => void;
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

export const getBagLineKey = (item: Pick<BagItem, "id" | "format" | "grind" | "lineKey">) => item.lineKey ?? [item.id, item.format ?? "", item.grind ?? ""].join("|");

const itemPrice = (item: BagItem) => item.price ?? getProductById(item.id)?.price ?? null;
const formatSubtotal = (value: number | null) => value == null
  ? "KES unavailable"
  : `KES ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(value)}`;

const subtotalFor = (items: BagItem[]) => {
  if (items.some((item) => itemPrice(item) === null)) return null;
  return items.reduce((total, item) => total + itemPrice(item)! * item.quantity, 0);
};

const itemFromProduct = (product: Product, variant: BagVariant = {}): BagItem => ({
  id: product.id,
  lineKey: getBagLineKey({ id: product.id, format: variant.format ?? product.formats[0], grind: variant.grind }),
  slug: product.slug,
  region: product.region,
  assetId: product.media.shopPrimary.id,
  kind: product.kind,
  quantity: 1,
  format: variant.format ?? product.formats[0],
  grind: variant.grind,
  price: product.price,
  currency: product.currency,
});

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [lastRemoved, setLastRemoved] = useState<{ item: BagItem; index: number } | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const undoTimerRef = useRef<number | null>(null);
  const itemsRef = useRef<BagItem[]>([]);
  const lastRemovedRef = useRef<{ item: BagItem; index: number } | null>(null);
  itemsRef.current = items;
  lastRemovedRef.current = lastRemoved;

  const open = useCallback((trigger?: HTMLElement | null) => {
    if (trigger) triggerRef.current = trigger;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const add = useCallback((product: Product, quantity = 1, trigger?: HTMLElement | null, variant: BagVariant = {}) => {
    const safeQuantity = Math.max(1, Math.floor(quantity));
    const newItem = itemFromProduct(product, variant);
    setItems((current) => {
      const existing = current.find((item) => getBagLineKey(item) === newItem.lineKey);
      if (existing) return current.map((item) => getBagLineKey(item) === newItem.lineKey ? { ...item, quantity: item.quantity + safeQuantity } : item);
      return [...current, { ...newItem, quantity: safeQuantity }];
    });
    setAnnouncement(`${product.id}${newItem.format ? `, ${newItem.format}${newItem.grind ? `, ${newItem.grind}` : ""}` : ""} added to your bag.`);
    open(trigger);
  }, [open]);

  const increment = useCallback((lineKey: string) => {
    const item = itemsRef.current.find((entry) => getBagLineKey(entry) === lineKey);
    if (!item) return;
    const nextQuantity = item.quantity + 1;
    setItems((current) => current.map((entry) => getBagLineKey(entry) === lineKey ? { ...entry, quantity: entry.quantity + 1 } : entry));
    const nextItems = itemsRef.current.map((entry) => getBagLineKey(entry) === lineKey ? { ...entry, quantity: nextQuantity } : entry);
    setAnnouncement(`${item.id} quantity ${nextQuantity}. Subtotal ${formatSubtotal(subtotalFor(nextItems))}.`);
  }, []);
  const decrement = useCallback((lineKey: string) => {
    const item = itemsRef.current.find((entry) => getBagLineKey(entry) === lineKey);
    if (!item) return;
    if (item.quantity > 1) {
      const nextQuantity = item.quantity - 1;
      setItems((current) => current.map((entry) => getBagLineKey(entry) === lineKey ? { ...entry, quantity: entry.quantity - 1 } : entry));
      const nextItems = itemsRef.current.map((entry) => getBagLineKey(entry) === lineKey ? { ...entry, quantity: nextQuantity } : entry);
      setAnnouncement(`${item.id} quantity ${nextQuantity}. Subtotal ${formatSubtotal(subtotalFor(nextItems))}.`);
      return;
    }
    const index = itemsRef.current.findIndex((entry) => getBagLineKey(entry) === lineKey);
    setLastRemoved({ item, index });
    setItems((current) => current.filter((entry) => getBagLineKey(entry) !== lineKey));
    setAnnouncement(`${item.id} removed from your bag. Undo is available.`);
    if (undoTimerRef.current != null) window.clearTimeout(undoTimerRef.current);
    undoTimerRef.current = window.setTimeout(() => setLastRemoved(null), 8000);
  }, []);
  const remove = useCallback((lineKey: string) => {
    const index = itemsRef.current.findIndex((entry) => getBagLineKey(entry) === lineKey);
    if (index < 0) return;
    const item = itemsRef.current[index];
    setLastRemoved({ item, index });
    setItems((current) => current.filter((entry) => getBagLineKey(entry) !== lineKey));
    setAnnouncement(`${item.id} removed from your bag. Undo is available.`);
    if (undoTimerRef.current != null) window.clearTimeout(undoTimerRef.current);
    undoTimerRef.current = window.setTimeout(() => setLastRemoved(null), 8000);
  }, []);
  const undoRemove = useCallback(() => {
    const removed = lastRemovedRef.current;
    if (!removed) return;
    setItems((current) => {
      if (current.some((item) => getBagLineKey(item) === getBagLineKey(removed.item))) return current;
      const next = [...current];
      next.splice(Math.min(removed.index, next.length), 0, removed.item);
      return next;
    });
    setAnnouncement(`${removed.item.id} restored to your bag.`);
    setLastRemoved(null);
    if (undoTimerRef.current != null) window.clearTimeout(undoTimerRef.current);
  }, []);

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    isOpen,
    announcement,
    add,
    increment,
    decrement,
    remove,
    undoRemove,
    open,
    close,
  }), [items, isOpen, announcement, add, increment, decrement, remove, undoRemove, open, close]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used inside BagProvider");
  return context;
}
