import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Modal from './Modal';
import { useCookies } from 'react-cookie';
// import { useQuery } from 'react-query';
// import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2rem;
`;

const Header = () => {
  const path_list = ['/', '/Survey', '/Result', '/Mypage'];
  const [cookies, removeCookie] = useCookies(['jwtToken']);
  const [isLoginNow, setIsLoginNow] = useState(false);
  const [userId,setUserId]=useState({"userId":""})
  const token = cookies.jwtToken;

  // const { data } = useQuery("userId", () => {
  //   return axios.get('http://localhost:5000/api/user')
  // },{ staleTime: Infinity },)

    fetch('http://localhost:5000/api/user/', {
      headers: {
      'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
    }
    }).then(res => res.json())
      .then(data => console.log(data)
        // setUserId(({
        // ...userId,
        // "userId":data.userId
        // }))
      )
  
  
  useEffect(() => {
    if (!token || token === 'undefined') {
      setIsLoginNow(false);
      return;
    }
    setIsLoginNow(true);
    return;
  }, [token]);

  if (path_list.find((path) => path === window.location.pathname) === undefined)
    return null;

  const userLogout = async () => {
    return removeCookie('jwtToken');
  };

  return (
    <Container>
      <Logo />
      <LoginContainer>
        {isLoginNow ? <button onClick={userLogout}>Log Out</button> : <Modal />}
      </LoginContainer>
    </Container>
  );
};

export default Header;
