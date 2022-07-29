import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { useCookies } from 'react-cookie';

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 99;
`;

const Header = () => {
  const path_list = ['/', '/Survey', '/Result', 'MyPage'];
  const [cookies, removeCookie] = useCookies(['jwtToken']);
  console.log(cookies);
  const [isLoginNow, setIsLoginNow] = useState(false);
  const token = cookies.jwtToken;

  useEffect(() => {
    if (!token || token === 'undefined') {
      setIsLoginNow(false);
      return;
    }
    setIsLoginNow(true);
    return;
  }, [token]);
  console.log('로그인 여부: ', isLoginNow);

  if (path_list.find((path) => path === window.location.pathname) === undefined)
    return null;

  const userLogout = async () => {
    return removeCookie('jwtToken');
  };

  return (
    <Container>
      {isLoginNow ? <button onClick={userLogout}>Log Out</button> : <Modal />}
    </Container>
  );
};

export default Header;
