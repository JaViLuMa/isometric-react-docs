import type { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type RenderedExampleProps = PropsWithChildren<{
  className?: string;
}>;

export default function RenderedExample({
  children,
  className,
}: RenderedExampleProps) {
  const mergedClassName = className
    ? `${styles.exampleFrame} ${className}`
    : styles.exampleFrame;

  return <div className={mergedClassName}>{children}</div>;
}
