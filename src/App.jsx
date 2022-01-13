import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from 'Components/Header';
import SignInModal from './Components/SignInModal';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import LegalNotice from './Pages/LegalNotice';
import Technologie from './Pages/Technologie/index';
import Team from './Pages/Team/index';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const cookies = new Cookies();
    axios
      .post('http://localhost:8123/auth/login', {
        token: cookies.get('user_token'),
      })
      .then((response) => {
        const user = response.data;
        dispatch({ type: 'LOGGEDIN', user });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  }, []);

  return (
    <>
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/technologie" element={<Technologie />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/equipe" element={<Team />} />

        <Route path="/register" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/mentionsLegales" element={<LegalNotice />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}
