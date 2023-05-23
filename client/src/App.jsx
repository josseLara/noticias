import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './hoc/auth';
import LoginPage from './components/pages/LoginPage';
import LandingPage from './components/pages/LandingPage';
import RegisterPage from './components/pages/RegisterPage';
// --> Template
import LandingPageTemplate from './components/templates/LandingTemplate';
import StoragePageTemplate from './components/templates/StorageTemplate';
import ProfilePageTemplate from './components/templates/ProfileTemplate';
import LoginTemplate from './components/templates/LoginTemplate';
import RegisterTemplate from './components/templates/RegisterTemplate';

function App() {
/**
    * null: A page that anyone can access
    * true: A page that only logged in users can access
    * false: A page that cannot be accessed by logged in users
    */
  const AuthenticLandingPage = Auth(LandingPage, true);
  const AuthenticLoginPage = Auth(LoginPage, false);
  const AuthenticRegisterPage = Auth(RegisterPage, false);

  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
          {/* prueba */}
          <Route path="/p" element={<RegisterTemplate />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;