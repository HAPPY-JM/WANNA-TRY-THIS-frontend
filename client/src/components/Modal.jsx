import React, { useContext } from 'react';
import { AnswerDataContext } from '../App';

const Modal = () => {
  const { isOpen, setIsOpen } = useContext(AnswerDataContext);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
              <button onClick={openModalHandler}>{!isOpen ? 'close' : 'open'}</button>
              {!isOpen ? (
                  <div> <a href="http://localhost:5000/api/auth/kakao" target="_blank" rel='noreferrer'>
        <img
          className="kakaoLogo"
          src="../login/login-kakao.png"
          alt="카카오 로그인"
          width="200vh"
          value="kakao"
          target="_blank"
        />
      </a>
      <a href="http://localhost:5000/api/auth/naver" target="_blank" rel='noreferrer'>
        <img
          className="naverLogo"
          src="../login/login-naver.png"
          alt="네이버 로그인"
          width="200vh"
          value="naver"
        />
      </a>
      <a href="http://localhost:5000/api/auth/google" target="_blank" rel='noreferrer' >
        <img
          className="googleLogo"
          src="../login/login-google.png"
          alt="구글 로그인"
          width="200vh"         
        />
      </a></div>
              ):null}
      </div>
    </>
  );
};

export default Modal;
