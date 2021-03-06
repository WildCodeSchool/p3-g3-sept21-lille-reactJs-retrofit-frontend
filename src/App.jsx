import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from 'Components/Header';
import VotePage from 'Pages/VotePage';
import Form from './Components/Form';
import SignInModal from './Components/SignInModal';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/index';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import Profile from './Pages/Profile';
import LegalNotice from './Pages/LegalNotice';
import Technologie from './Pages/Technologie/index';
import Team from './Pages/Team/index';
import Localisation from './Pages/Localisation';
import Cars from './Pages/Cars';
import CarsDetails from './Pages/CarsDetails/index';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  useEffect(() => {
    const cookies = new Cookies();
    axios
      .post('/auth/login', {
        token: cookies.get('user_token'),
      })
      .then((response) => {
        const user = response.data;
        dispatch({ type: 'LOGGEDIN', user });
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response);
        }
      });

    return window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SignInModal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renseignements" element={<Form />} />
        <Route path="/partenariats" element={<Form />} />
        <Route path="/nousrencontrer" element={<Form />} />
        <Route path="/serviceclient" element={<Form />} />
        <Route path="/conseiltechnique" element={<Form />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/sav" element={<Form />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/technologie" element={<Technologie />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mentionsLegales" element={<LegalNotice />} />
        <Route path="/Vehicules/:id" element={<CarsDetails />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/vehicules" element={<Cars />} />
        <Route path="/vehicules/:name" element={<Cars />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}
