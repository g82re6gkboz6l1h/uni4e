import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-8 text-left font-display text-4xl leading-tight text-ink-900 text-balance dark:text-white md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}
