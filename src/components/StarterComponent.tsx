import { FormComponent } from "./FormComponent";
import data from "../data.json";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import React, { useEffect, useState } from "react";
import QuestionBlockComponent from "./QuestionBlockComponent";
import {
  questionAmounts,
  questionsNameTopic,
  starterSvgPath,
  STORAGE_ANSWERS,
  STORAGE_CHECKED,
  STORAGE_QUESTION,
  STORAGE_SCORE,
  STORAGE_SHOW,
  STORAGE_SIGNAL,
  STORAGE_THEME,
  STORAGE_TOPIC,
} from "../utilles/constants";
import TopBlock from "./TopBlock";
import ResultComponent from "./ResultComponent";
import ConditionalButton from "./ConditionalButton";
import { DataGetter } from "../types";
import { clearStorageWithException } from "../utilles/clearStorageWithException";

const getData: DataGetter = (topic, qsNum, key) =>
  data.quizzes[topic].questions[qsNum][key];

const StarterComponent = () => {
  const [topic, setData, { update, remove }] = useLocaleStorage(STORAGE_TOPIC);
  const [isQuizStarted, setQuizState] = useState(false);
  const [questionNumber, setNumber] = useLocaleStorage(STORAGE_QUESTION, "0");
  const [show, setShow] = useLocaleStorage(STORAGE_SHOW);
  const [finish, showFinish] = useLocaleStorage(STORAGE_SCORE);

  const question = getData(+topic, +questionNumber, "question") as string;
  const questionOptions = getData(+topic, +questionNumber, "options") as string[];
  const answer = getData(+topic, +questionNumber, "answer");

  const playAgain = () => {
    setNumber("");
    showFinish("");
    setShow("");
    setData("");

    clearStorageWithException(STORAGE_THEME, remove);
  };

  const runFinish = () => {
   showFinish("finish");
   setQuizState(false);
   };

  const passNextQuestion = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if ((e.target as HTMLInputElement).type === "button") {
      remove([STORAGE_CHECKED, STORAGE_SIGNAL, STORAGE_ANSWERS, STORAGE_SHOW]);
      setShow("");
      setNumber((prev) => String(parseInt(prev) + 1));
    }
  };

  const nextQuestionBySignal = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (questionAmounts(+topic) === +questionNumber + 1) return runFinish();
    passNextQuestion(e);
  };

  useEffect(() => {
    update(setData);
    setNumber(questionNumber || "0");
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
