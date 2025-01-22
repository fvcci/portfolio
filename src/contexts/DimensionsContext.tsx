import type { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";

export const Provider = ({
  children,
  numNodes,
  addend,
}: {
  children?: ReactNode | ReactNode[];
  numNodes: number;
  addend: number;
}) => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const newRows = Math.max(
        Math.floor(window.innerHeight / numNodes) + addend,
        2,
      );
      const newCols = Math.max(
        Math.floor(window.innerWidth / numNodes) + addend,
        2,
      );
      setDimensions({ rows: newRows, cols: newCols });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Context.Provider value={{ dimensions }}>{children}</Context.Provider>;
};

export const Context = createContext<{
  dimensions: Dimensions | null;
} | null>(null);

export interface Dimensions {
  rows: number;
  cols: number;
}
