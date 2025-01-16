import { useEffect, useState } from 'react';
import './App.css';
import { Section } from './App.styled';
import StarterComponent from './components/StarterComponent';
import ThemeComponent from './ThemeComponent';
import { CurrentList } from './types';



const App = ()=> {
  

  return (
    <ThemeComponent>
      <Section>
        <StarterComponent >
          
      </StarterComponent>
      </Section>
  </ThemeComponent>  
  )
};

export default App;
