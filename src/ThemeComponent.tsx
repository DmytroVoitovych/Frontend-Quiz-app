import { ThemeProvider } from "@emotion/react";
import { theme } from "./stylesVariables";
import Wrapper from "./Wrapper";
import { Child } from "./types";
import { CheckBox, Header, Label } from "./ThemeComponent.styled";
import { useLocaleStorage } from "./customHooks/useLocaleStorage";
import { CurrentTopic } from "./components/CurrentTopic";


const ThemeComponent = ({ children }: Child) => {
  const [data, setData] = useLocaleStorage('theme','light');
 


  return(
    <ThemeProvider theme={theme[data as 'light' | 'dark']}>
   <Wrapper>
      <Header>
      <CurrentTopic />
        <Label htmlFor="themeSwitcher">
          <CheckBox
            type="checkbox"
            name="themeSwitcher"
              id="themeSwitcher"
              checked={data === 'dark'}
            onChange={()=>setData((prev:string) =>
              prev === "light" ? "dark" : "light"
            )}
          />
        </Label>
      </Header>
        {children}
       </Wrapper>
    </ThemeProvider>
  );
};

export default ThemeComponent;
