import ApplicationRoutes from './routes'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
