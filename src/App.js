import { useState } from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from 'styled-components';

function App() {
  const [isDark,setIsDark] = useState(false);
  
  return (
    <ThemeContext.Provider value={{isDark,setIsDark}}>
     <Page />
     </ThemeContext.Provider>
  );
}

export default App;
