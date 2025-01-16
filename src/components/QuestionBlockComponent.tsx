import { InputRange, QuestionH, QuestionSection, QuestionSpan } from "./QuestionBlockComponent.styled";



const QuestionBlockComponent = ({num,question,numOfAllQuestion}:{[key:string]:string | number})=>{


return (
<QuestionSection>
  <QuestionSpan>Question {num} of {numOfAllQuestion}</QuestionSpan>
  <QuestionH>{question}</QuestionH>
   <InputRange tabIndex={-1} num={num as number} id="questionProgress" name="questionProgress" step="1" min="0" max={numOfAllQuestion} defaultValue={num} type="range" />
</QuestionSection>
);

};


export default QuestionBlockComponent;