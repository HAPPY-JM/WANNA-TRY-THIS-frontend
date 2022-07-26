import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #d8e9f0, pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default MyPage;
