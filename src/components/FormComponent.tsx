import React, { useEffect, useRef, useState } from "react";
import { KeyList } from "../types";
import { ListComponent } from "./ListComponent";
import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import { Form } from "./FormComponent.styled";
import { useFormStatus } from "react-dom";

export const FormComponent: React.FC<KeyList> = ({
  topics,
  svg,
  setQuize,
  setShow,
  answer,
  children,
}) => {
  const [result,setResult] = useLocaleStorage('result','0');
  const [topicIndex, setTopicIndex] = useLocaleStorage("topic", "");
  const [isSubmited,setSubmit] = useState(false);
  const [answersIndex, setAnswersIndex, { remove }] = useLocaleStorage(
    "answers",
    ""
  );

  
  const handleSubmit = async (formData:FormData)=>{
     setSubmit(true);
     setShow('show');
    if(formData.get(topics[+answersIndex]) === answer){
     setResult((prev)=> String(+prev + 1));
    }
   console.log(1);
   
  };
  
  const setIndex = (index: number) =>
    svg ? setTopicIndex(index.toString()) : setAnswersIndex(index.toString());

  useEffect(() => {
    setQuize(!isNaN(parseInt(topicIndex)));
    // const clean = () => remove("answers");

    // if(!parseInt(result))  window.addEventListener("beforeunload", clean);

    // return () => {
    //   window.removeEventListener("beforeunload", clean);
    // };
    // console.log(isSubmited && children.props.type);
    if(children.props.type === 'button') setSubmit(false);  
  }, [topicIndex,result, setQuize,remove]);

  return (
    <Form action={handleSubmit}>
      <ListComponent  setIndex={setIndex} items={topics} svg={svg}  {...(isSubmited ?{answer} : {})}
      />
      {children}
    </Form>
  );
};
