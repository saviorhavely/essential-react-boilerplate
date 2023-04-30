import ApplicationRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <ApplicationRoutes />
      </Provider>
    </>
  )
}

export default App
