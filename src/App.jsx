
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body.jsx'
import appStore from './utils/appStore.jsx'

function App() {


  return (
    <>
    <Provider store={appStore}>
    <Body/>

    </Provider>
    
    </>
  )
}

export default App
