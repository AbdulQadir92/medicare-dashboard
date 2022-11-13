import { ThemeProvider } from 'styled-components';
import { LightTheme } from './themes/LightTheme';
import GlobalStyles from './styles/Global';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <GlobalStyles />
        <div>
          <Sidebar />
          <Main />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
