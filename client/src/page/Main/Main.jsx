import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 10px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
`;
const Title = styled.h1`
  font-weight: 800;
  text-align: center;
`;
const MainButton = styled.button`
  border: none;
  color: white;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  + button {
    margin-left: 100px;
  }
`;

const Main = () => {
  return (
    <Container>
      <Title>이거 머글랭?</Title>
      <ButtonContainer>
        <MainButton>골라줄개!</MainButton>
        <Link to="/Survey">
          <MainButton primary>골라볼래?</MainButton>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
