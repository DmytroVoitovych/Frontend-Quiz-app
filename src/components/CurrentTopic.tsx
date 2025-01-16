import { useLocaleStorage } from "../customHooks/useLocaleStorage";
import { forceUpdate, questionsNameTopic, starterSvgPath } from "../utilles/constants";
import { DecorH } from "./CurrentTopic.styled";




export const CurrentTopic = ()=>{
const [topic,setTopic,{update}] = useLocaleStorage('topic');
forceUpdate.force = ()=>update(setTopic);

return(
<DecorH svg={starterSvgPath[+topic]} bgIndex={+topic}  className="decorTopic">{questionsNameTopic[+topic]}</DecorH>    
);

}