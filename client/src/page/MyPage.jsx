import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PieChart from '../components/PieChart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  align-items: center;
`;

const MyPage = () => {
  // const { data, isError, error } = useQuery(
  //   'userID',
  //   async () => {
  //     const response = await axios.get(
  //       'http://kdt-sw2-busan-team05.elicecoding.com:5002/api/user/62de7d5a09eb4d48365617c9',
  //     );
  //     const resData = response.data;
  //     return resData;
  //   },
  //   {
  //     onSuccess: (data) => {
  //       return data;
  //     },
  //     onError: (e) => {
  //       console.log(e.message);
  //     },
  //   },
  // );

  return (
    <Container>
      {/* <Header /> */}
      <PieChart />
    </Container>
  );
};

export default MyPage;
