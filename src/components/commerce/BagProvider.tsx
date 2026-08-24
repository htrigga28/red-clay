"use client";

import { createContext, useContext, useMemo, useState } from "react";

type BagContextValue = { count: number; add: () => void };
const BagContext = createContext<BagContextValue | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => ({ count, add: () => setCount((current) => current + 1) }), [count]);
  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used inside BagProvider");
  return context;
}
