import React from 'react';
import axios from 'axios';

const AllFood = async () => {
  const allFood = await axios.get('http://localhost:5000/api/food');

  console.log(allFood.data);
  return <div></div>;
};

export default AllFood;
