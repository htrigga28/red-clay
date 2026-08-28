"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { getProductById, type Product } from "@/content/coffees";
import {
  makeCartLineId,
  resolveCartLine,
  resolveSelection,
  type CartLine,
  type ProductSelection,
} from "@/lib/commerce";

export type BagItem = CartLine;

type BagContextValue = {
  items: BagItem[];
  count: number;
  hasInvalidItems: boolean;
  isOpen: boolean;
  announcement: string;
  add: (product: Product, selection: ProductSelection, quantity?: number, trigger?: HTMLElement | null) => void;
  increment: (lineId: BagItem["lineId"]) => void;
  decrement: (lineId: BagItem["lineId"]) => void;
  remove: (lineId: BagItem["lineId"]) => void;
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((trigger?: HTMLElement | null) => {
    if (trigger) triggerRef.current = trigger;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const add = useCallback((product: Product, selection: ProductSelection, quantity = 1, trigger?: HTMLElement | null) => {
    const currentProduct = getProductById(product?.id);
    const resolved = resolveSelection(currentProduct, selection);
    const safeQuantity = Math.floor(quantity);
    if (!resolved || !Number.isFinite(safeQuantity) || safeQuantity < 1) {
      setAnnouncement("That product option cannot be added to your bag.");
      return;
    }
    const lineId = makeCartLineId({ productId: resolved.product.id, ...selection });
    setItems((current) => {
      const existing = current.find((item) => item.lineId === lineId);
      if (existing) return current.map((item) => item.lineId === lineId ? { ...item, quantity: item.quantity + safeQuantity } : item);
      return [...current, { ...selection, productId: resolved.product.id, quantity: safeQuantity, lineId }];
    });
    setAnnouncement(`${resolved.product.id} ${resolved.format.label} added to your bag.`);
    open(trigger);
  }, [open]);

  const increment = useCallback((lineId: BagItem["lineId"]) => setItems((current) => current.map((item) => item.lineId === lineId && resolveCartLine(item) ? { ...item, quantity: item.quantity + 1 } : item)), []);
  const decrement = useCallback((lineId: BagItem["lineId"]) => setItems((current) => current.flatMap((item) => {
    if (item.lineId !== lineId || !resolveCartLine(item)) return item;
    return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : [];
  })), []);
  const remove = useCallback((lineId: BagItem["lineId"]) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId));
    setAnnouncement("Item removed from your bag.");
  }, []);

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    hasInvalidItems: items.some((item) => !resolveCartLine(item)),
    isOpen,
    announcement,
    add,
    increment,
    decrement,
    remove,
    open,
    close,
  }), [items, isOpen, announcement, add, increment, decrement, remove, open, close]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used inside BagProvider");
  return context;
}
