import React from 'react';
import styled from 'styled-components';

const SNSBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 20rem;
  height: 8rem;
  background: #e8e8e8;
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const SNSIcon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 1rem;
`;

const ShareTwitter = () => {
  const sendText = '오늘 먹을 것!';
  let sendUrl = ' url ';
  window.open(
    'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl,
  );
};

const SNS = () => {
  return (
    <SNSBoxContainer>
      <SNSIcon src="../icon/icon-link.png" />
      <SNSIcon src="../icon/icon-kakaotalk.png" />
      <SNSIcon src="../icon/icon-twitter.png" />
    </SNSBoxContainer>
  );
};

export default SNS;
