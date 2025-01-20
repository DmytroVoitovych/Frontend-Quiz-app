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

interface ListInner {
  items: string[];
  svg?: string[];
  setIndex: (index: number) => void;
  answer?: string;
};

type CurrentList = "starter" | "quiz" | "result";
type QuestionKeys = "question" | "options" | "answer";
type DataGetter = (topic: number, qsNum: number, key: QuestionKeys) => string | string[];

export type { Child, Children, KeyList, CurrentList, ConditionalButtonProps,ListInner,DataGetter};
