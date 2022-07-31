import styled from 'styled-components';
import { useContext } from 'react';
import { AnswerDataContext } from '../App';

function ProgressBar() {
  const { barcount } = useContext(AnswerDataContext);

  return (
    <Container>
      <Progress width={(barcount / 4) * 100 + '%'} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 1.5rem;
  background-color: #ffffff52;
  align-items: center;
  border-radius: 20px;
`;

const Progress = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

export default ProgressBar;
