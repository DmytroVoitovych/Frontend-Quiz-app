import styled from "@emotion/styled";
import { colors } from "./stylesVariables";



export const Header = styled.header`
padding: 16px 0px;
`;

export const Label = styled.label`
position: relative;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: auto;
margin-right: 22px;
width: 32px;
height: 20px;
background-color: ${colors.purple};
border-radius:999px;

&::before,&::after{
content:'';
position: absolute;
width: 14px;
height: 14px;
background-repeat: no-repeat;
background-size: cover;
}

&::before{
left:-22px ;
background-image: url("${({ theme }) => theme.switcherSunImg}");

}

&::after{
right: -22px;    
background-image: url("${({theme})=> theme.switcherMoonImg}");
}

&:has(input:checked) > input{
 transform: translateX(100%);
 transition: 250ms;
 }

`;


export const CheckBox = styled.input`
position: relative;
appearance: none;
width: 12px;
height: 12px;
transform: translateX(0);
transition: 250ms;

&::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
background-color: ${colors.white};
}
  

`;