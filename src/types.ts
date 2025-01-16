import { ReactElement, ReactNode, SetStateAction } from "react";

interface Child {
  children: ReactElement;
}

interface Children {
  children: ReactNode;
}

interface KeyList {
  svg?: string[];
  topics:string[];
  setQuize: (value:SetStateAction<boolean>) => void;
  setShow: (value:SetStateAction<string>) => void;
  answer:string;
  children?: ReactNode;
}

type CurrentList = "starter" | "quiz" | "result";

export type { Child, Children, KeyList, CurrentList };
