import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      217deg,
      rgba(216, 143, 255, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(215, 126, 228, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(66, 66, 241, 0.8), rgba(0, 0, 255, 0) 70.71%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const NotFound = () => {
  return (
    <Container>
      <div>이거머글랭 바로가기</div>
    </Container>
  );
};

export default NotFound;
