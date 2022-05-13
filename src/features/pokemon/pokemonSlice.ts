import {
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { PokemonQueryParams } from '../../app/services/types';

interface PokemonState {
  query: PokemonQueryParams;
}

const initialState: PokemonState = {
  query: {
    name: '',
    subtype: ''
  }
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setQuery(
      state,
      { payload }: PayloadAction<PokemonQueryParams>
    ) {
      state.query = payload;
    }
  }
});

export const { setQuery } = pokemonSlice.actions;
export default pokemonSlice.reducer;
