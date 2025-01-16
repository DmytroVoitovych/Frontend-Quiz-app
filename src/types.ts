import { ReactElement, ReactNode, SetStateAction } from "react";

interface Child {
  children: ReactElement;
}

interface Children {
  children: ReactNode;
}

interface ConditionalButtonProps {
  isQuizStarted: boolean;
  show: string;
  nextQuestionBySignal: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  finish?:string;
  playAgain?:()=>void
}

interface KeyList {
  svg?: string[];
  topics: string[];
  setQuize: (value: SetStateAction<boolean>) => void;
  setShow: (value: SetStateAction<string>) => void;
  answer: string;
  children?: ReactElement<{ show: "show" | "" }>;
}

type CurrentList = "starter" | "quiz" | "result";

export type { Child, Children, KeyList, CurrentList, ConditionalButtonProps };
