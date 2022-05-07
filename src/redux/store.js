import { configureStore } from '@reduxjs/toolkit';
import { ItemSlice } from '../redux/ItemSlice';
// import { apiContacts } from 'servicers/apiContacts';

export const store = configureStore({
  reducer: {
    filter: ItemSlice.reducer,
    // [apiContacts.reducerPath]: apiContacts.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiContacts.middleware),
});
