import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './hoc/auth';
import LoginPage from './components/pages/LoginPage';
import LandingPage from './components/pages/LandingPage';

function App() {
/**
    * null: A page that anyone can access
    * true: A page that only logged in users can access
    * false: A page that cannot be accessed by logged in users
    */
  const AuthenticLandingPage = Auth(LandingPage, null);
  const AuthenticLoginPage = Auth(LoginPage, false);


  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
         
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;