import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from './types'

const postsApi = createApi({
  reducerPath: 'posts',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://nextblog.local/wp-json',
  }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPostsList: builder.query<Post[], void>({
      query: () => ({
        url: '/wp/v2/posts',
        method: 'GET',
      }),
      // transformResponse: (result: Post[]): Post[] => {
      //   return result
      // },
      providesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsListQuery } = postsApi
export default postsApi
