import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
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
