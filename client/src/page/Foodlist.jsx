import React from "react"
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 1px 8px black;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    justify-content: center;
    align-items: center;
`
const FoodImg = styled.img`
  width: 250px;
  height: 250px;

`;

const Foodlist = () => {
    const { data, isLoading, isError, error } = useQuery(
    'super-name',
    async() => {
      return await axios.get(
        "http://localhost:5000/api/food",
      );
    },
    { staleTime: Infinity },
  );
  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
    
    const foodList = data.data

              console.log(foodList[0]["img"])
    return (<>
        {foodList.map((food) => {
         return ( <Container>
            <FoodImg src={foodList.food.img}  />
            <h3 key={foodList.food.name}>{ foodList.food.name}</h3>
            <span key={foodList.food.comment} >{ foodList.food.comment}</span>
        </Container>)    
        })}
        
        </>
    )
}

export default Foodlist;