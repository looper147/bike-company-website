import React, { useState } from "react";
import './App.css';
import 'fontsource-roboto';
import NavigationBar from "./components/navigationBar/navigation.bar";
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/navigationBar/components/lightMode/themes.js';
import { GlobalStyles } from './globalStyles.js';
import Switch from "@material-ui/core/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import NewsPage from "./pages/NewsPage.js";
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
        <Router>
          <NavigationBar
            lightMode={
              <label style={{ float: "right" }} >
                <Switch onClick={toggleTheme} id="lightMode" />
                Light Mode
              </label>
            }
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/News" component={NewsPage} />
        </Router>


      </>
    </ThemeProvider>


  );
}
export default App;
