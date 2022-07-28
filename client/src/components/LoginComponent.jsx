import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
export const LoginComponent = () => {
  // const url = '';
  // function onClick(e) {
  //   console.log(e.tartge.value)
  //   if (e.tartge.value === 'kakao') {
  //     return url = url + 'kakao';
  //   } else if (e.tartge.value === 'google') {
  //     return url =url + 'google';
  //   } else {
  //     return url =url + 'navers';
  //   }
  // }
  // const headers = {
  //   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //   Accept: '*/*',
  // };
  //  const { data, isLoading, isError, error } = useQuery(
  //     'food',
  //     () => {
  //       return fetch('http://localhost:5000/api/auth/kakao', {
  //         // method: "GET",
  //         // headers: {
  //         //               "Content-Type": "application/json",
  //         //     "X-Requested-With": "XMLHttpRequest",
  //         // }
  //       });
  //     },
  //     {
  //       onSuccess: (data) => {
  //         console.log(data);
  //       },
  //       onError: (e) => {
  //         console.log(e.message);
  //       },
  //     },
  //   );

  // fetch('http://localhost:5000/api/auth/google')
  //   .then((res) => (res.json()))
  //   .then((data)=>   console.log(data))

  // localStorage.setItem('token', data);
  const { data } = useQuery(
    'login',
    async () => {
      return await fetch('http://localhost:5000/api/auth/kakao');
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
  // const { data } = useQuery('aa', axios.get('http://localhost:5000/api/auth/google'), {
  //   onSuccess: data => {
  //    localStorage.setItem('token', data);
  //   }
  // });
  // localStorage.setItem('token', data);
  return (
    <div>
      <a href="http://localhost:5000/api/auth/kakao">
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
        href="http://localhost:5000/api/auth/naver"
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
        href="http://localhost:5000/api/auth/google"
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
