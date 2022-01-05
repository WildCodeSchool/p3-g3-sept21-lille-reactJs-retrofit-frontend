// import React, { useContext, useState } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import cookie from 'react-cookie';

import {
  Overlay,
  ModalContainer,
  MainContainer,
  Input,
  ClosureContainer,
} from './style';

export default function SignInModal() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resErrorMessage, setResErrorMessage] = useState('');
  const [resMessage, setResMessage] = useState('');

  const SignInfo = {
    password,
    mail: email.toLowerCase(),
  };

  const SendInfo = (evt) => {
    evt.preventDefault();
    setResErrorMessage('');
    setResMessage('');
    axios
      .post('http://localhost:8123/auth/login', SignInfo)
      .then((response) => {
        setResMessage(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setResErrorMessage(error.response.data);
        }
      });
  };
  // console.log('Cookies: ', cookie.get('user_token', [options]));

  const modalState = useSelector((state) => state.signInModal);
  const dispatch = useDispatch();

  return (
    <>
      {modalState && (
        <Overlay>
          <ModalContainer>
            <ClosureContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                onClick={() => {
                  dispatch({ type: 'CLOSESIGNIN' });
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </ClosureContainer>
            <MainContainer>
              <h1>Login</h1>
              <Input>
                Adresse e-mail
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Input>
              <Input>
                Mot de passe
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Input>
              <p>
                <button className="submitBtn" type="submit" onClick={SendInfo}>
                  Se connecter
                </button>
              </p>
              <span className="success">{resMessage && resMessage}</span>
              <span className="error">
                {resErrorMessage && !resMessage && resErrorMessage}
              </span>
              <p>
                <button
                  className="noAccount"
                  type="submit"
                  onClick={() => {
                    dispatch({ type: 'OPENSIGNUP' });
                  }}
                >
                  Pas de compte ? Inscrivez-vous
                </button>
              </p>
            </MainContainer>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}