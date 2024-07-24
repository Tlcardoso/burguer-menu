import { TagTypes, baseApi, endpoints } from '../../services';
import { ViewMenuOutput, ViewVenueOutput } from './types';

const VisitService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    OneVenue: builder.query<ViewVenueOutput, string>({
      query: (code) => ({
        url: `${endpoints.venue}/${code}`,
        method: 'GET',
      }),
      forceRefetch: () => true,
      providesTags: [TagTypes.Venue],
    }),
    getMenu: builder.query<ViewMenuOutput, unknown>({
      query: () => ({
        url: `${endpoints.menu}`,
        method: 'GET',
      }),
      forceRefetch: () => true,
      providesTags: [TagTypes.Venue],
    }),
  }),
});

export const {
  useOneVenueQuery,
  useGetMenuQuery,
} = VisitService;
