import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from './baseQuery';

export enum TagTypes {
  Actions = 'actions',
  Venue = 'venue'
}

export const endpoints = {
  venue: '/challenge/venue',
  menu: '/challenge/menu',
};

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: Object.values(TagTypes),
  baseQuery: apiBaseQuery,
  endpoints: () => ({}),
});
