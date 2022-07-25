import styled from 'styled-components';
import { useContext, useState } from 'react';
import { AnswerDataContext } from '../App';
function ProgressBar() {
  // const [count, setCount] = useState(0);
  const {barcount } =useContext(AnswerDataContext)

  return (
    // 여기 부분을 연결해주면 됩니다.
    <Container
    >
      {/*%로 부모넓이의 1/4 씩 넓어짐*/}
      <Progress width={(barcount / 4) * 100 + '%'} />
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem;
  background-color: #ffffff52;
  width: 40rem;
  height: 2rem;
  display: flex;
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
