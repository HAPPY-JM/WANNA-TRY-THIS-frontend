import React from 'react';
import Question from '../components/Question';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Survey = () => {
  return (
    <Container>
      <Question />
    </Container>
  );
};

export default Survey;
