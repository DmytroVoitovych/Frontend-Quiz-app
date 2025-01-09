import { ThemeProvider } from "@emotion/react";
import { theme } from "./stylesVariables";
import { useState, useEffect, } from "react";
import Wrapper from "./Wrapper";
import { Child } from "./types";
import { CheckBox, Header, Label } from "./ThemeComponent.styled";


const ThemeComponent = ({ children }:Child) => {
  const [currentTheme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => console.log(currentTheme), [currentTheme]);
  
  return(
    <ThemeProvider theme={theme[currentTheme]}>
   <Wrapper>
      <Header>
        <Label htmlFor="themeSwitcher">
          <CheckBox
            type="checkbox"
            name="themeSwitcher"
            id="themeSwitcher"
            onChange={()=>setTheme((prev) =>
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
