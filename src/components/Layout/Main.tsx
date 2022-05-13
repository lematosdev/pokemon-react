import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { useSearchCardsQuery } from '../../app/services/pokemon';
import { Card } from '../../app/services/types';
import { PokemonCard } from '../Card/Card';

const StyledLayout = styled.main`
  height: 100vh;
  padding-top: 40px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  );
  gap: 20px 0px;
  justify-items: center;
`;

const Main: React.FC = () => {
  const query = useAppSelector(
    (state) => state.pokemon.query
  );

  const { data, isFetching, error } = useSearchCardsQuery(
    query,
    { skip: query.name === '' ? true : false }
  );

  return (
    <StyledLayout>
      {data &&
        data.data.map((card: Card) => (
          <PokemonCard key={card.id} {...card} />
        ))}
    </StyledLayout>
  );
};
export default Main;
