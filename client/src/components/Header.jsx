import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogInButton from './LogInButton';

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  justify-content: right;
  align-items: center;
`;

// const Header = () => {
//   const [isLogIn, setIsLogIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLogIn(true);
//     }
//   }, []);

const Header = () => {
  return (
    <Container>
      <LogInButton />
    </Container>
  );
};

export default Header;
