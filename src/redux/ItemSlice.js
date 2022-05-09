import { createSlice } from '@reduxjs/toolkit';
import ProType from 'prop-types';

export const ItemSlice = createSlice({
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

ItemSlice.proptype = {
  itemSlice: ProType.node.isRequired,
};

export const { searchByName } = ItemSlice.actions;

export const filteredReduce = ItemSlice.reducer;
