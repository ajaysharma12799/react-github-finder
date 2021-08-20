import React from 'react'
import './App.css'
import Form from './components/Form';
import Card from './components/Card';
import { UserContextProvider } from './context/userContext';

const App = () => {

  return (
    <div className="container">
      <UserContextProvider>
      <Form />
      <Card />
    </UserContextProvider>
    </div>
  )
}

export default App
