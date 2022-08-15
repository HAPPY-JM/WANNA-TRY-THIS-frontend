import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const ButtonContainer = styled(motion.img)`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: auto;
  margin-bottom: 1rem;
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
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
              <a href="https://wanna-try-this-back.herokuapp.com/api/auth/kakao" rel="noreferrer">
                <ButtonContainer
                  whileHover={{ scale: 1.2 }}
                  className="kakaoLogo"
                  src="../login/login-kakao.png"
                  alt="카카오 로그인"
                  value="kakao"
                />
              </a>
              <a href="http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/naver" rel="noreferrer">
                <ButtonContainer
                  whileHover={{ scale: 1.2 }}
                  className="naverLogo"
                  src="../login/login-naver.png"
                  alt="네이버 로그인"
                  value="naver"
                />
              </a>
              <a href="http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/google" rel="noreferrer">
                <ButtonContainer
                  whileHover={{ scale: 1.2 }}
                  className="googleLogo"
                  src="../login/login-google.png"
                  alt="구글 로그인"
                  value="google"
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
