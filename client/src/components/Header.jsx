import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogIn(true);
    }
  }, []);

  return <></>;
};

export default Header;
