
import './app.css'
import Todo from './components/Todo'
import {Provider} from "react-redux"
import {store} from "./app/store"
export function App() {


  return (
    <>
    <Provider store={store}>
    <Todo/>
    </Provider>
  
    </>
  )
}
