import { Children } from "../../types";
import { ContainerBlock } from "./Container.styled";




const Container = ({ children }:Children)=>{


return <ContainerBlock>
    {children}
</ContainerBlock>

};

export default Container;