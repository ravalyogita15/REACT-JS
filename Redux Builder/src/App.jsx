import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import Theme from './Components/Theme'
import Counter from './Components/Counter'
import { store } from './store/store'

function App() {
 

  return (
    <>
      <Provider store={store}>
        <Theme />
        <Counter />
       
      </Provider>
      
    </>
  )
}

export default App
