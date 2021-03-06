import React from 'react';
import './App.css';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import dark from './themes/dark';
import light from './themes/light';
import Header from './components/Header';
import Add from './pages/Add';
import Vote from './pages/Vote';
import Result from './pages/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = React.useState(dark);
  function switchTheme() {
    setTheme(theme === dark ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header onSwitchThemeImgClick={switchTheme} />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Add />
            </Route>
            <Route path="/polls/:pollId/vote">
              <Vote />
            </Route>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}
export default App;
