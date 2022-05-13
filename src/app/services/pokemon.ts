// Need to use the React-specific entry point to allow generating React hooks
import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import type {
  Card,
  PokemonApiResponse,
  PokemonQueryParams
} from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pokemontcg.io/v2/',
    prepareHeaders(headers) {
      headers.set(
        'X-Api-Key',
        import.meta.env.VITE_POKEMON_API_KEY
      );
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getCardById: builder.query<Card, string>({
      query: (id) => `cards/${id}`,
      transformResponse: (
        response: PokemonApiResponse<Card>
      ) => response.data
    }),
    searchCards: builder.query<
      PokemonApiResponse<Card[]>,
      PokemonQueryParams
    >({
      query: (query) => `cards?q=name:${query.name}*`
    })
  })
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCardByIdQuery, useSearchCardsQuery } =
  pokemonApi;
