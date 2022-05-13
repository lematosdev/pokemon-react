import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 210px;
  background-color: #161b22;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;
    margin-bottom: 50px;
  }
  p {
    color: #f0f6fc;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <p>Pokémon TCG Guru by Andrew Backes</p>
        <p>
          All data made available by the Pokémon TCG API
        </p>
        <p>
          This website is not produced, endorsed, supported,
          or affiliated with Nintendo or The Pokémon
          Company.
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
