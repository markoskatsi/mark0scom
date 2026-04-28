import type { ReactNode } from "react";
import "./Card.scss";

export function CardContainer({ children }: { children: ReactNode }) {
  return <div className="cardContainer">{children}</div>;
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}
