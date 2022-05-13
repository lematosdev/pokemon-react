import { useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetCardByIdQuery } from '../../app/services/pokemon';

const StyledCardDetails = styled.div`
  padding: 50px 200px;
`;

const StyledImage = styled.div`
  img {
    width: auto;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
      0 1px 1px 0 rgb(0 0 0 / 16%),
      0 1px 3px 0 rgb(0 0 0 / 14%);
    display: inline-block;
  }
`;

const CardDetails: React.FC = () => {
  const params = useParams();

  const { data, isFetching, error } = useGetCardByIdQuery(
    params.cardId!
  );
  useEffect(() => {}, []);
  console.log(data);

  return (
    <StyledCardDetails>
      <StyledImage>
        <img src={data?.images.large} alt={data?.name} />
      </StyledImage>
    </StyledCardDetails>
  );
};

export default CardDetails;
