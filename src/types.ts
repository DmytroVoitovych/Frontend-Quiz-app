import { ReactElement, ReactNode } from "react";

interface Child {
  children: ReactElement;
}

interface Children {
  children: ReactNode;
}

export type { Child, Children };
