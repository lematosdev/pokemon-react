import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { PokemonQueryParams } from '../../app/services/types';
import { setQuery } from '../../features/pokemon/pokemonSlice';

const StyledNav = styled.nav`
  width: 100%;
  background-color: #161b22;
  height: 64px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #c9d1d9;
  cursor: pointer;

  img {
    max-width: 60px;
  }

  a {
    white-space: nowrap;
    text-decoration: none;
    font-size: 22px;
    color: #c9d1d9;
    padding-left: 15px;
    &:hover {
      color: #42a5f5;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 22px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;

  &:hover {
    background-color: #0d1117;
  }
`;

const Input = styled.div`
  display: flex;
  height: 60%;
  background-color: #0d1117;
  border-radius: 5px;
  color: #c9d1d9;

  svg {
    max-width: 30px;
    margin: 0 8px;
  }

  input {
    color: #c9d1d9;
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 1rem;
    outline: none;
    &::placeholder {
      color: #c9d1d9;
    }
    &:focus {
      border: 1px solid #824c95;
    }
  }
`;

const StyleNavList = styled.div`
  color: #c9d1d9;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== 'Enter') return;
    const query: PokemonQueryParams = {
      name: e.currentTarget.value
    };
    dispatch(setQuery(query));
  };

  return (
    <StyledNav>
      <StyledLogo>
        <Link to='/'>
          <img src='https://pokemontcg.guru/assets/oranguru-0544bd72aa3108d4497d9b0015f81f01927e79bc88c94bde8d385e842f619a33.png' />
          <a> Pokemon TCG Guru </a>
        </Link>
      </StyledLogo>
      <Input>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search for a card'
          onKeyDown={handleSearch}
        />
      </Input>
      <StyleNavList>
        <StyledLink> Advanced </StyledLink>
        <StyledLink> Syntax </StyledLink>
        <StyledLink> Sets </StyledLink>
        <StyledLink> Donate </StyledLink>
      </StyleNavList>
    </StyledNav>
  );
};

export default Header;
