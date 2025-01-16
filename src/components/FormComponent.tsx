import React, { useEffect, useState } from "react";
import { KeyList } from "../types";
import { ListComponent } from "./ListComponent";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import { AlertSpan, Form } from "./FormComponent.styled";



export const FormComponent: React.FC<KeyList> = ({
  topics,
  svg,
  setQuize,
  setShow,
  answer,
  children,
  
}) => {
  const [,setResult] = useLocaleStorage('result','0');
  const [topicIndex, setTopicIndex] = useLocaleStorage("topic", "");
  const [isSubmited,setSubmit] = useState(false);
  const [alert,setAlert] = useState(false);
  const [answersIndex, setAnswersIndex,{update,remove}] = useLocaleStorage(
    "answers",
    ""
  );
  
  const handleSubmit = async (formData:FormData)=>{
     if(!answersIndex)setAlert(true);
    
    if(answersIndex){ 
      console.log('an',answersIndex);
      setSubmit(true);
     setShow('show');
     setAnswersIndex('');
    if(formData.get(topics[+answersIndex]) === answer){
     setResult((prev)=> String(+prev + 1));
    }
   }
 };
  
  const setIndex = (index: number) =>
    svg ? setTopicIndex(index.toString()) : setAnswersIndex(index.toString());

  useEffect(()=>{
    if(!isSubmited){
    remove(['answers']);
    update(setAnswersIndex);}},[]);

  useEffect(() => {
    
    setQuize(!isNaN(parseInt(topicIndex)));
    console.log(answersIndex,'next',children?.props.show);
  if(children?.props.show === 'show'){setSubmit(false);setAnswersIndex('');}  
  if(answersIndex) setAlert(false);
  console.log(answersIndex,'eff');
  }, [topicIndex,setQuize,children,answersIndex,setAnswersIndex]);

  return (
    <>
    <Form action={handleSubmit}>
     <ListComponent  setIndex={setIndex} items={topics} svg={svg}  {...(isSubmited?{answer} : {})}
      />
      {children}
    </Form>
   {alert && <AlertSpan id="emptyAlert">Please select an answer</AlertSpan>}
    </>
  );
};
