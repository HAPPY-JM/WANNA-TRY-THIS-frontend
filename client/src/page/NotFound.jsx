import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const Message = styled.div`
  font-family: 'NEXONLv1GothicBold';
  font-size: 3rem;
  &:hover,
  :focus {
    animation-duration: 3s;
    animation-name: rainbowLink;
    animation-iteration-count: infinite;

    @keyframes rainbowLink {
      0% {
        color: #ff2a2a;
      }
      15% {
        color: #ff7a2a;
      }
      30% {
        color: #ffc52a;
      }
      45% {
        color: #43ff2a;
      }
      60% {
        color: #2a89ff;
      }
      75% {
        color: #202082;
      }
      90% {
        color: #6b2aff;
      }
      100% {
        color: #e82aff;
      }
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Link to="/">
        <Message>길을 잃으셨군요!</Message>
      </Link>
    </Container>
  );
};
export default NotFound;
