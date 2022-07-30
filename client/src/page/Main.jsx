import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

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
  display: flex;
  flex-direction: row;
  padding: 3rem;
`;

const Character = styled.img`
  width: 10rem;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const MainButton = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 15rem;
  height: 15rem;
  justify-content: center;
  align-items: center;
  font-family: 'NEXONLv1GothicBold';
  font-size: 2rem;
  text-align: center;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => (props.primary ? '#FEE6E6' : '#D9EAF1')};
  color: ${(props) => (props.primary ? '#F38F88' : '#70C4E7')};
  margin-right: 2rem;
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

          <Link to="/Survey">
            <MainButton
              whileHover={{ scale: 1.2 }}
              whileTap={{ borderRadius: '50%' }}
              primary
            >
              골라줄게!
            </MainButton>
          </Link>
        </ButtonContainer>
      </Container>
      <Character src="./character.png" />
      <Footer />
    </>
  );
};

export default Main;
