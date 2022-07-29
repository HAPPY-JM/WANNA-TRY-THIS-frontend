import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SurveyFooter = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 1rem;
  font-family: 'TmoneyRoundWindRegular';
  font-size: 1rem;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
`;

const Survey = () => {
  return (
    <>
      <Container>
        <ProgressBar />
        <Question />
      </Container>
      <SurveyFooter>ⓒ 2022 Elice Team-5. all rights reserved.</SurveyFooter>
    </>
  );
};

export default Survey;
