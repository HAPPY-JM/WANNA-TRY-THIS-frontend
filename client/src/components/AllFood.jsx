import React from 'react';
import axios from 'axios';

const AllFood = async () => {
  const allFood = await axios.get('http://kdt-sw2-busan-team05.elicecoding.com:5002/api/food');

  return <div>{console.log(allFood)}</div>;
};

export default AllFood;
