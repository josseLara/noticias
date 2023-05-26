import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './hoc/auth';
import LoginPage from './components/pages/LoginPage';
import LandingPage from './components/pages/LandingPage';
import RegisterPage from './components/pages/RegisterPage';
import StoragePage from './components/pages/StoragePage';
import ProfilePage from './components/pages/Profilepage';
import SearchPage from './components/pages/SearchPage';
// --> Template



function App() {
/**
    * null: A page that anyone can access
    * true: A page that only logged in users can access
    * false: A page that cannot be accessed by logged in users
    */
  const AuthenticLandingPage = Auth(LandingPage, true);
  const AuthenticLoginPage = Auth(LoginPage, false);
  const AuthenticRegisterPage = Auth(RegisterPage, false);
  const AuthenticStoragePage = Auth(StoragePage, true);
  const AuthenticProfilePage = Auth(ProfilePage, true);
  const AuthenticSearchPage = Auth(SearchPage, true);


  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<AuthenticLandingPage />} />
          <Route path="/login" element={<AuthenticLoginPage />} />
          <Route path="/register" element={<AuthenticRegisterPage />} />
          <Route path="/storage" element={<AuthenticStoragePage />} />
          <Route path="/profile" element={<AuthenticProfilePage />} />
          <Route path="/search" element={<AuthenticSearchPage />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;