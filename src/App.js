import React, { useState } from "react";
import './App.css';
import 'fontsource-roboto';
import NavigationBar from "./components/navigationBar/navigation.bar";
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/navigationBar/components/lightMode/themes.js';
import { GlobalStyles } from './globalStyles.js';
import Switch from "@material-ui/core/Switch";


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <>
        <GlobalStyles />
        <NavigationBar
          lightMode={
            <label style={{ float: "right" }} >
              <Switch onClick={toggleTheme} id="lightMode" />
              Light Mode
            </label>
          }
        />


      </>
    </ThemeProvider>


  );
}
export default App;
