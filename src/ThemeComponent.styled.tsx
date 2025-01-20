import styled from "@emotion/styled";
import { colors, mq } from "./stylesVariables";



export const Header = styled.header`
display: flex;
align-items: center;
padding: 16px 0px;

${mq[1]}{
padding-top: 54px;
padding:40px 0px;
}

${mq[3]}{
padding:83px 0px;
}
`;

export const Label = styled.label`
position: relative;
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: auto;
margin-right: 22px;
padding: 4px;
width: 32px;
height: 20px;
background-color: ${colors.purple};
border-radius:999px;

@media (hover: hover) {

    &:hover{
    cursor: pointer;
    }

}


${mq[1]}{
width:48px;
height:28px;
margin-right: 40px;
}

&::before,&::after{
content:'';
position: absolute;
width: 14px;
height: 14px;
background-repeat: no-repeat;
background-size: cover;

${mq[1]}{
width:21px;
height:21px;
}

${mq[3]}{
width:24px;
height:24px;
}
}

&::before{
left:-22px ;
background-image: url("${({ theme }) => theme.switcherSunImg}");

${mq[1]}{
left: -40px;
}

}

&::after{
right: -22px;    
background-image: url("${({theme})=> theme.switcherMoonImg}");

${mq[1]}{
right: -40px;
}
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

${mq[1]}{
width:20px;
height:20px;
}

&::after{
content:'';
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
background-color: ${colors.white};
cursor: pointer;
}
  

`;