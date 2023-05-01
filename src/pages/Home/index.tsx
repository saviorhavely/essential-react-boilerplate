import { useAppDispatch, useAppSelector } from '@/store'
import { setExample } from '@/store/feature/example'
import { useGetPostsListQuery } from '@/store/services/posts'
import { useState } from 'react'

function Home(): JSX.Element {
  return (
    <>
      <h1>Homepage</h1>
    </>
  )
}

export default Home
