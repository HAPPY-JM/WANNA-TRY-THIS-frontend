import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogInButton from './LogInButton';

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #00000071;
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 99;
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
  const path_list = ["/","/Survey","/Result"]
 if(path_list.filter(path => path !==window.location.pathname))return null

  return (
    <Container>
      <LogInButton />
    </Container>
  );
};

export default Header;
