import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  background-color: #161b22;
  position: relative;
  height: 64px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 80px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #c9d1d9;
  cursor: pointer;

  img {
    max-width: 60px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: #c9d1d9;
    padding-left: 15px;
    &:hover {
      color: #42a5f5;
    }
  }
`;

const StyleNavList = styled.div`
  color: #c9d1d9;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  padding-right: 80px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    &:hover {
      background-color: #0d1117;
      
    }
  }
`;

const Header: React.FC = () => {
  return (
    <StyledNav>
      <StyledLogo>
        <img src='https://pokemontcg.guru/assets/oranguru-0544bd72aa3108d4497d9b0015f81f01927e79bc88c94bde8d385e842f619a33.png' />
        <a> Pokemon TCG Guru </a>
      </StyledLogo>
      <StyleNavList>
        <a> Advanced </a>
        <a> Syntax </a>
        <a> Sets </a>
        <a> Donate </a>
      </StyleNavList>
    </StyledNav>
  );
};

export default Header;
