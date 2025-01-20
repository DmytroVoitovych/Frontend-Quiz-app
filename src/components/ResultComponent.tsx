import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import { STORAGE_RESULT } from "../utilles/constants";
import { CurrentTopic } from "./CurrentTopic";
import { ScoreP, SectionResult, SpanScore } from "./ResultComponent.styled";

const ResultComponent = ({numOfAllQuestion}:{numOfAllQuestion:number}) => {
  const [result] = useLocaleStorage(STORAGE_RESULT);

  return (
    <SectionResult>
      <CurrentTopic />
      <ScoreP>
        <SpanScore data-showdecor>{result}</SpanScore>
        out of {numOfAllQuestion}
      </ScoreP>
    </SectionResult>
  );
};

export default ResultComponent;
