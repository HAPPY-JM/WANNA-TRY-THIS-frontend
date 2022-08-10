import React from 'react';
import axios from 'axios';

const AllFood = async () => {
  const allFood = await axios.get(
    'http://kdt-sw2-busan-team05.elicecoding.com:5002/api/food',
  );

  console.log(allFood.data);
  return <div></div>;
};

export default AllFood;
