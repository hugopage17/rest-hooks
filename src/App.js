import './App.css'
import { store } from './redux/redux.js'
import { Provider } from 'react-redux'
import Interface from './components/Interface'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {Interface()}
      </div>
    </Provider>
  )
}

export default App
