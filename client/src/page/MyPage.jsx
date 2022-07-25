import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mypage = () => {
  return (
    <Container>
      <Header />

    </Container>
  );
};

export default mypage;
