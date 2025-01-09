
import { Children } from "./types";
import { Main } from "./Wrapper.styled";



const Wrapper = ({ children }:Children) => {
     return (<Main>{children}</Main>)
}


export default Wrapper;