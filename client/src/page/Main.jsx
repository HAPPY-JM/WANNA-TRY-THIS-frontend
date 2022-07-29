import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { LoginComponent } from '../components/LoginComponent';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  padding-top: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'NEXON Lv1 Gothic OTF';
`;

const ButtonContainer = styled.div`
  padding: 3rem;
`;

const MainButton = styled.button`
  width: 15rem;
  height: 15rem;
  font-family: 'NEXONLv1GothicBold';
  font-size: 2rem;
  text-align: center;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => (props.primary ? '#FEE6E6' : '#D9EAF1')};
  color: ${(props) => (props.primary ? '#F38F88' : '#70C4E7')};

  + button {
    margin-left: 2rem;
  }
`;

const Main = () => {
  return (
    <>
      <Container>
        <div className="title">
          <img
            className="title-logo"
            alt="타이틀 로고"
            src="../logo/logo-wanna-try-this.png"
            width={500}
          />
        </div>
        <ButtonContainer>
          <MainButton>골라볼래?</MainButton>
          <Link to="/Survey">
            <MainButton primary>골라줄게!</MainButton>
          </Link>
        </ButtonContainer>
      </Container>
      <Footer>ⓒ 2022 Elice Team-5. all rights reserved.</Footer>
    </>
  );
};

export default Main;
