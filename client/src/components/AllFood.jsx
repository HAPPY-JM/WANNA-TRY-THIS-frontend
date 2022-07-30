import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllFood = async () => {
  const allFood = await axios.get('http://localhost:5000/api/food');

  return <div>{console.log(allFood)}</div>;
};

export default AllFood;
