import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';
import styled from 'styled-components';

const BackGround = styled.div`
  background: #00000082;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 30rem;
  background: whitesmoke;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.1rem, #494949b6, solid;
  border-radius: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(AnswerDataContext);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <button onClick={openModalHandler}>
          {!isOpen ? 'close' : 'Log In'}
        </button>
        {!isOpen ? (
          <Container>
            <div>
              <a href="http://localhost:5000/api/auth/kakao" rel="noreferrer">
                <img
                  className="kakaoLogo"
                  src="../login/login-kakao.png"
                  alt="카카오 로그인"
                  width="200vh"
                  value="kakao"
                />
              </a>
              <a href="http://localhost:5000/api/auth/naver" rel="noreferrer">
                <img
                  className="naverLogo"
                  src="../login/login-naver.png"
                  alt="네이버 로그인"
                  width="200vh"
                  value="naver"
                />
              </a>
              <a href="http://localhost:5000/api/auth/google" rel="noreferrer">
                <img
                  className="googleLogo"
                  src="../login/login-google.png"
                  alt="구글 로그인"
                  width="200vh"
                />
              </a>
            </div>
          </Container>
        ) : null}
        <BackGround />
      </div>
    </>
  );
};

export default Modal;
