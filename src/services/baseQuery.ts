import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { fetchBaseQuery, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { environment } from '../config/enviroments';

const setLocalStorageHeaders = (headers: Headers, fields: string[]) => {
  for (const field of fields) {
    const found = localStorage.getItem(field);
    if (found) headers.set(field, `Bearer ${found}`);
  }
};

const tokens = ['Authorization'];

const baseQuery = fetchBaseQuery({
  baseUrl: environment.baseApiUrl,
  prepareHeaders: (headers) => {
    setLocalStorageHeaders(headers, tokens);

    return headers;
  },
});

const apiBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => baseQuery(args, api, extraOptions);

export { apiBaseQuery };
