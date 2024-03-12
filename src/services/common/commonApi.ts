import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@typings/User";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_DATA_API }),
  endpoints: (builder) => ({
    sendLoginToken: builder.query<User, string>({
      query: (query: string) => `/login?${query}`,
    }),
    getProfile: builder.query<User, string>({
      query: (query: string) => `/profile?profileId=${query}`,
    }),
  }),
});

export const {
  useSendLoginTokenQuery,
  useLazySendLoginTokenQuery,
  useGetProfileQuery,
} = commonApi;
