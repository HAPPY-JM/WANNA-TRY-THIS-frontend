import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImg = styled.img`
  width: 10rem;
  margin-left: 2rem;
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg
        src="../logo/logo-wanna-try-this-white.png"
        onClick={() => window.localStorage.clear()}
      />
    </Link>
  );
};

export default Logo;
