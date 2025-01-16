import { ConditionalButtonProps } from "../types";
import { InputAsButton } from "./ConditionalButton.styled";

const ConditionalButton = ({
  isQuizStarted,
  show,
  nextQuestionBySignal,
  finish,
  playAgain
}: ConditionalButtonProps) => {
  return (    
    isQuizStarted && !show ? (
    <InputAsButton type="submit" value="Submit Answer" data-showdecor />
  ) : isQuizStarted ? (
    <InputAsButton
      onClick={nextQuestionBySignal}
      type="button"
      value="Next Question"
      data-showdecor
    />
  ) : finish? 
    <InputAsButton
      type="button"
      value="Play Again"
      data-showdecor
      onClick={playAgain}
    />
    :<></>);
};

export default ConditionalButton;
