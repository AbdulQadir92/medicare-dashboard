import { ThemeProvider } from 'styled-components';
import { LightTheme } from './themes/LightTheme';
import { DarkTheme } from './themes/DarkTheme';
import GlobalStyles from './styles/Global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Sidebar from './components/sidebar/Sidebar';
import PrivateRoute from './utils/PrivateRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import { useState } from 'react';


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Router>
        <AuthProvider>
          <GlobalStyles />
          <div>
            <Routes>
              <Route path="*" element={
                <PrivateRoute>
                  <Sidebar />
                  <Main setTheme={setTheme} />
                </PrivateRoute>
              }></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />} ></Route>
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
