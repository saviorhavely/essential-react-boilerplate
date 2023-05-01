import { useGetPostsListQuery } from '@/store/services/posts'

function Posts(): JSX.Element {
  const { data, isLoading, isFetching, isError, refetch } = useGetPostsListQuery()

  console.log('redux', {
    data: data,
    load: isLoading,
    doing: isFetching,
    hasError: isError,
  })

  return (
    <>
      {isLoading || (isFetching && <h2>Carregando...</h2>)}
      {data && (
        <>
          <h1>Posts List</h1>
          <ul>
            {data.map(({ title, status, id, content }, index) => (
              <li key={index}>
                {id} | {title.rendered} | {status}
                <span dangerouslySetInnerHTML={{ __html: content.rendered }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default Posts
