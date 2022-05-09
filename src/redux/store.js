import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiContacts } from './api/services';
import { filteredReduce } from './ItemSlice';
export const store = configureStore({
  reducer: {
    filter: filteredReduce,
    [apiContacts.reducerPath]: apiContacts.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    apiContacts.middleware,
  ],
});

setupListeners(store.dispatch);
