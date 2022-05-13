import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card } from '../../app/services/types';

const StyledCard = styled.div`
  max-width: fit-content;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;

export const PokemonCard: React.FC<Card> = (card) => {
  return (
    <StyledCard>
      <Link to={`/cards/${card.id}`}>
        <img src={card.images.small} alt={card.name} />
      </Link>
    </StyledCard>
  );
};
