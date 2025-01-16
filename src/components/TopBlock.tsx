import { Explainer, TextBlock } from "./TopBlock.styled";



const TopBlock = ({finish}:{finish:string})=>{

return (!finish? 
  <TextBlock>
          <h1>
            <span>Welcome to the</span>
            Frontend Quiz!
          </h1>
          <Explainer>Pick a subject to get started.</Explainer>
        </TextBlock>:
       <TextBlock>
              <h1>
                <span>Quiz completed</span>
                You scored...
              </h1>
              </TextBlock>    
    )


};

export default TopBlock;