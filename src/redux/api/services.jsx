import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiContacts = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6272e017a6522e24ac3fd462.mockapi.io/',
    tagTypes: ['Contacts'],
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: () => ({
        url: 'contacts',
        method: 'POST',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = apiContacts;
