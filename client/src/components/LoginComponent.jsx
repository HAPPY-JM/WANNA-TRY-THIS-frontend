import React from 'react';
import { useQuery } from 'react-query';

export const LoginComponent = () => {

  const { data } = useQuery(
    'login',
    async () => {
      return await fetch('http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/kakao');
    },
    {
      onSuccess: (data) => {
        console.log(data);
        localStorage.setItem('token', data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    },
  );

  return (
    <div>
      <a href="http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/kakao">
        <img
          className="kakaoLogo"
          src="../login/login-kakao.png"
          alt="카카오 로그인"
          width="200vh"
          value="kakao"
          target="_blank"
        />
      </a>
      <a
        href="http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/naver"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="naverLogo"
          src="../login/login-naver.png"
          alt="네이버 로그인"
          width="200vh"
          value="naver"
        />
      </a>
      <a
        href="http://kdt-sw2-busan-team05.elicecoding.com:5002/api/auth/google"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="googleLogo"
          src="../login/login-google.png"
          alt="구글 로그인"
          width="200vh"
        />
      </a>
    </div>
  );
};
