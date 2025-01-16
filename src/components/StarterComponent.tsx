import { FormComponent } from "./FormComponent";
import { TextBlock, Explainer, InputAsButton } from "./StarterComponent.styled";
import data from "../data.json";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import React, { useEffect, useState } from "react";
import QuestionBlockComponent from "./QuestionBlockComponent";
import {
  forceUpdate,
  questionsNameTopic,
  starterSvgPath,
} from "../utilles/constants";

type QuestionKeys = "question" | "options" | "answer";
const getData = (
  topic: number,
  qsNum: number,
  key: QuestionKeys
): string | string[] => data.quizzes[topic].questions[qsNum][key];

const StarterComponent = () => {
  const [topic, setData, { update,remove}] = useLocaleStorage("topic");
  const [isQuizStarted, setQuizState] = useState(false);
  const [questionNumber, setNumber] = useState(0);
  const [show,setShow] = useLocaleStorage('show');


  const question = getData(+topic, questionNumber, "question") as string;
  const questionOptions = getData(+topic, questionNumber, "options") as string[];
  const answer = getData(+topic,questionNumber,'answer');

  const nextQuestionBySignal = (e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
    e.stopPropagation();
    e.preventDefault();
   if((e.target as HTMLInputElement ).type === 'button'){
    remove(['checked','signal','answers','show']); 
    setShow('');
    setNumber((prev)=>prev + 1);
   }
  };

  useEffect(() => {
    update(setData);
    forceUpdate.force();
  }, [isQuizStarted]);

  return (
    <>
      {!isQuizStarted ? (
        <TextBlock>
          <h1>
            <span>Welcome to the</span>
            Frontend Quiz!
          </h1>
          <Explainer>Pick a subject to get started.</Explainer>
        </TextBlock>
      ) : (
        <QuestionBlockComponent
          question={question}
          num={questionNumber + 1}
          numOfAllQuestion={10}
        />
      )}
      <FormComponent
        setShow={setShow}
        setQuize={setQuizState}
        topics={!isQuizStarted ? questionsNameTopic : questionOptions}
        svg={!isQuizStarted ? starterSvgPath : undefined}
        answer={!isQuizStarted ? '': answer as string}
      >
        {isQuizStarted && !show? <InputAsButton  type="submit" value="Submit Answer" />:
        <InputAsButton onClick={nextQuestionBySignal} type="button" value="Next Question"/>}
      </FormComponent>
    </>
  );
};

export default StarterComponent;
