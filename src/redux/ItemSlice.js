import { createSlice } from '@reduxjs/toolkit';
import ProType from 'prop-types';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    searchByName(state, action) {
      state.filter = action.payload;
    },
  },
});

filterSlice.proptype = {
  filter: ProType.string.isRequired,
};

export const { searchByName } = filterSlice.actions;

export default filterSlice.reducer;
