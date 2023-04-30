import { useAppDispatch, useAppSelector } from '@/store'
import { setExample } from '@/store/feature/example'

function Home(): JSX.Element {
  const store = useAppSelector((state) => state.example)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>This is a homepage {store.number}</h1>
      <button
        onClick={() => {
          dispatch(setExample(store.number + 1))
        }}
      >
        add
      </button>
    </>
  )
}

export default Home
