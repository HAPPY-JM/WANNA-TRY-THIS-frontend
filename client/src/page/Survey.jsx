import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/GlobalStyle';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Survey = () => {
  return (
    <>
      <Header />
      <Container>
        <ProgressBar />
        <Question />
        <GlobalStyle />
        <Footer />
      </Container>
    </>
  );
};

export default Survey;
