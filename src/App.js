import React, { useState } from "react";
import './App.css';
import 'fontsource-roboto';
import NavigationBar from "./components/navigationBar/navigation.bar";
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/navigationBar/components/lightMode/themes.js';
import { GlobalStyles } from './globalStyles.js';
import Switch from "@material-ui/core/Switch";
import lightModeBg from "./components/images/lightMode.jpg"
import darkModeBg from "./components/images/darkMode.jpg"

function App() {
  const [theme, setTheme] = useState('dark');
  const [bg, setBg] = useState(darkModeBg);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme('light');
      setBg(lightModeBg)
    } else {
      setTheme('dark')
      setBg(darkModeBg)
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <>
        <GlobalStyles bg={bg} />
        <NavigationBar />
        <label style={{ float: "right" }} >
          <Switch onClick={toggleTheme} id="lightMode" />
          Light Mode
        </label>

      </>
    </ThemeProvider>


  );
}
export default App;
