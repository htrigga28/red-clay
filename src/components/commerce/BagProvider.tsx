"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import type { Product } from "@/content/coffees";

export type BagItem = {
  id: Product["id"];
  slug: string;
  region: string;
  assetId: string;
  kind: Product["kind"];
  quantity: number;
};

type BagContextValue = {
  items: BagItem[];
  count: number;
  isOpen: boolean;
  announcement: string;
  add: (product: Product, quantity?: number, trigger?: HTMLElement | null) => void;
  increment: (id: BagItem["id"]) => void;
  decrement: (id: BagItem["id"]) => void;
  remove: (id: BagItem["id"]) => void;
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

const itemFromProduct = (product: Product): BagItem => ({
  id: product.id,
  slug: product.slug,
  region: product.region,
  assetId: product.media.shopPrimary.id,
  kind: product.kind,
  quantity: 1,
});

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

  const add = useCallback((product: Product, quantity = 1, trigger?: HTMLElement | null) => {
    const safeQuantity = Math.max(1, Math.floor(quantity));
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + safeQuantity } : item);
      return [...current, { ...itemFromProduct(product), quantity: safeQuantity }];
    });
    setAnnouncement(`${product.id} added to your bag.`);
    open(trigger);
  }, [open]);

  const increment = useCallback((id: BagItem["id"]) => setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)), []);
  const decrement = useCallback((id: BagItem["id"]) => setItems((current) => current.flatMap((item) => item.id !== id ? item : item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : [])), []);
  const remove = useCallback((id: BagItem["id"]) => {
    setItems((current) => current.filter((item) => item.id !== id));
    setAnnouncement(`${id} removed from your bag.`);
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
