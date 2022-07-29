import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Modal from './Modal';
import { useCookies } from 'react-cookie';

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

const NickNameContainer = styled.div`
  display: flex;
  font-family: 'TmoneyRoundWindRegular';
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  color: #313131;
  margin-right: 1rem;
`;

const NickName = () => {};

const Header = () => {
  const path_list = ['/', '/Survey', '/Result', 'MyPage'];
  const [cookies, removeCookie] = useCookies(['jwtToken']);
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

  if (path_list.find((path) => path === window.location.pathname) === undefined)
    return null;

  const userLogout = async () => {
    return removeCookie('jwtToken');
  };

  return (
    <Container>
      <Logo />
      <LoginContainer>
        <NickNameContainer>
          <NickName />님 하이!
        </NickNameContainer>
        {isLoginNow ? <button onClick={userLogout}>Log Out</button> : <Modal />}
      </LoginContainer>
    </Container>
  );
};

export default Header;
