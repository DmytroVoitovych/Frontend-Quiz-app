import data from "../data.json";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import accesibility from "../assets/images/icon-accessibility.svg";

const questionsNameTopic: string[] = data.quizzes.map(
    (e) => e.title
  );
  const starterSvgPath: string[] = [
    html,
    css,
    js,
    accesibility,
  ];
 const forceUpdate =  {force:()=>{}};
 const questionAmounts = (num:number):number=> data.quizzes[num].questions.length;


  export{questionsNameTopic,starterSvgPath,forceUpdate,questionAmounts};