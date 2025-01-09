import styled from "@emotion/styled";


export const Main = styled.main`
background-color: ${({theme}) => theme.mainBg};
min-height:inherit;
background-image: url("${({ theme }) =>(theme.mobileBgImg)}");
background-repeat: no-repeat;
background-position: right;
background-size: cover;
padding: 0 24px;
`;