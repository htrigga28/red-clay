import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function PageContainer({ children, className = "", ...props }: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return <div className={`page-container ${className}`} {...props}>{children}</div>;
}

export function SectionShell({ children, className = "", ...props }: ComponentPropsWithoutRef<"section"> & { children: ReactNode }) {
  return <section className={`section-shell ${className}`} {...props}>{children}</section>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}
