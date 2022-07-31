import React, { useState } from 'react';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import { Navigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #8cc9e1, pink);
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Message = styled.div`
  font-family: 'TmoneyRoundWindRegular';
  font-size: 2rem;
  color: #353535;
  padding: 3rem;
`;

const Loading = () => {
  const [change, setChange] = useState(true);
  setTimeout(() => {
    setChange(false);
  }, 1500);

  return (
    <>
      {change ? (
        <Container>
          <PuffLoader color="#fff" size={300} speedMultiplier={0.5} />
          <Message>로그인중이에요!</Message>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Loading;
