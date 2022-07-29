import React, { useEffect, useState}from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useCookies } from "react-cookie"
import {useForm} from 'react-hook-form'
// import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  align-items: center;
`;
const MainFooter = styled.input`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 10rem;
  font-family: 'TmoneyRoundWindRegular';
  font-size: 1rem;
  color: #707070;
  justify-content: center;
  align-items: center;
  text-align: center;
  `;
const Form = styled.form`
    display: flex;
  position: absolute;

  top: 10rem;
`

const MyPage = () => {
  const [cookies]= useCookies(['jwtToken'])
  const token = cookies.jwtToken;
  const [nickname, setNickname] = useState({
    "newNickname":""
  })
  const { register, handleSubmit } = useForm();
  const onSubmit =async (data) => {
    console.log(data.newNickname)  
    setNickname({
        ...nickname,
        "newNickname":data.newNickname
      })
    return await fetch("http://localhost:5000/api/user/nickname", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      },
      body :  JSON.stringify(nickname)   
    }).then(res=>res.json())
      .then(data=>console.log(data))
  }
  // const data1 = {
  //   "newNickname": "abc"
  // }
  //   const onClickName = async (e) => {
  //     e.preventDefault()
  //     console.log(e.target.value)
  //     setNickname({
  //       ...nickname,
  //       newNickname:e.target.value
  //     })
  //   return await fetch("http://localhost:5000/api/user/nickname", {
  //     method: "PATCH",
  //     headers: {
  //       'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //     },
  //     body :  JSON.stringify(nickname)   
  //   }).then(res=>res.json())
  //     .then(data=>console.log(data))
  // }
  // useEffect(() => {
    
  // })

  // const ooClickFOOD = async (e) => {
  //   e.preventDefault()
  //   return await fetch("http://localhost:5000/api/user/")
  //     .then((res)=>res.json())
  //     .then((data) => console.log(data))
  // }
  // const { data, isError, error } = useQuery(
  //   'userID',
  //   async () => {
  //     const response = await fetch(
  //       'http://localhost:5000/api/user/62de7d5a09eb4d48365617c9',
  //        {
  //     headers: {
  //       'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`}}
  //     );
  //     const resData = response.data;
  //     return resData;
  //     // console.log(data.map((todo)=>todo.data))
  //   },
  //   {
  //     onSuccess: (data) => {
  //       return data;
  //     },
  //     onError: (e) => {
  //       console.log(e.message);
  //     },
  //     // select: (data) => {
  //     //  const foodMostRecommandedFood = data.data.mostRecommandedFood
  //     // return foodMostRecommandedFood
  //     // }
  //   },
  // );
  // //통계 데이터
  // console.log(data);

  return (
    <Container>
      {/* <Header /> */}
		<Form onSubmit={handleSubmit(onSubmit)}>
			<label>닉네임</label>
			<input {...register("newNickname")} />
			<input type="submit" />
		</Form>
    </Container>
  );
};

export default MyPage;
