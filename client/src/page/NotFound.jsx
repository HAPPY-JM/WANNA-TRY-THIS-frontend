import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = () => {
  return (
    <Container>
      <div>이거머글랭 바로가기</div>
    </Container>
  );
};

export default NotFound;
