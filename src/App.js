import React, { useState } from "react";
import './App.css';
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
  const [checked, setChecked] = useState(false);



  const check = () => {
    if (checked) {
      setChecked(false);
      if (theme === "light") {
        setTheme('dark');
      }

    } else {
      setChecked(true);
      if (theme === "dark") {
        setTheme("light");
      }
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
                <Switch onChange={check} id="lightMode" checked={checked} />
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
