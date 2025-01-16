import { FormComponent } from "./FormComponent";
import data from "../data.json";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import React, { useEffect, useState } from "react";
import QuestionBlockComponent from "./QuestionBlockComponent";
import {
  forceUpdate,
  questionAmounts,
  questionsNameTopic,
  starterSvgPath,
} from "../utilles/constants";
import TopBlock from "./TopBlock";
import ResultComponent from "./ResultComponent";
import ConditionalButton from "./ConditionalButton";

type QuestionKeys = "question" | "options" | "answer";
const getData = (
  topic: number,
  qsNum: number,
  key: QuestionKeys
): string | string[] => data.quizzes[topic].questions[qsNum][key];

const StarterComponent = () => {
  const [topic, setData, { update, remove }] = useLocaleStorage("topic");
  const [isQuizStarted, setQuizState] = useState(false);
  const [questionNumber, setNumber] = useLocaleStorage("question", "0");
  const [show, setShow] = useLocaleStorage("show");
  const [finish, showFinish] = useLocaleStorage("score");

  const question = getData(+topic, +questionNumber, "question") as string;
  const questionOptions = getData(+topic, +questionNumber, "options") as string[];
  const answer = getData(+topic, +questionNumber, "answer");

  const playAgain = ()=> {
  showFinish(''); 
const removeList:string[] = [];
const len = window.localStorage.length;

for (let index = 0; index < len; index++) {
    if(window.localStorage.key(index) !== 'theme')
    removeList.push(window.localStorage.key(index) as string);    
}

 if(removeList.length)  remove(removeList);

  };

  const nextQuestionBySignal = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (questionAmounts(+topic) === +questionNumber + 1) {
      showFinish("finish");
      setQuizState(false);
      return;
    }
    if ((e.target as HTMLInputElement).type === "button") {
      remove(["checked", "signal", "answers", "show"]);
      setShow("");
      setNumber((prev) => String(parseInt(prev) + 1));
    }
  };

  useEffect(() => {
    update(setData);
    forceUpdate.force();
  }, [isQuizStarted]);

  return (
    <>
      {!isQuizStarted ? (
        <TopBlock finish={finish} />
      ) : (
        <QuestionBlockComponent
          question={question}
          num={+questionNumber + 1}
          numOfAllQuestion={questionAmounts(+topic)}
        />
      )}
      {!finish ? (
        <FormComponent
          setShow={setShow}
          setQuize={setQuizState}
          topics={!isQuizStarted ? questionsNameTopic : questionOptions}
          svg={!isQuizStarted ? starterSvgPath : undefined}
          answer={!isQuizStarted ? "" : (answer as string)}
        >
          <ConditionalButton
            isQuizStarted={isQuizStarted}
            show={show}
            nextQuestionBySignal={nextQuestionBySignal}
          />
        </FormComponent>
      ) : (
        <>
        <ResultComponent numOfAllQuestion={questionAmounts(+topic)} />
        <ConditionalButton
         isQuizStarted={isQuizStarted}
         show={show}
         nextQuestionBySignal={nextQuestionBySignal}
        finish={finish}
        playAgain={playAgain}
      />
      </>
      )}
    </>
  );
};

export default StarterComponent;
