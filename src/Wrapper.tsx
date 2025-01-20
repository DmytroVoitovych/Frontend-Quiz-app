
import Container from "./components/shared/Container";
import { Children } from "./types";
import { Main } from "./Wrapper.styled";



const Wrapper = ({ children }:Children) => {
     return (<Main><Container>{children}</Container></Main>)
}


export default Wrapper;