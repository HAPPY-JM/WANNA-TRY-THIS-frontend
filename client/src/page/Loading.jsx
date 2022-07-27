import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PuffLoader from 'react-spinners/PuffLoader';

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
  return (
    <Container>
      <Header />
      <PuffLoader color="#fff" size={300} speedMultiplier={0.5} />
      <Message>두근두근 과연 결과는?!</Message>
    </Container>
  );
};

export default Loading;
