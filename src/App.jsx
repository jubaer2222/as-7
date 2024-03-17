
import { useState } from 'react'
import './App.css'
import Cooks from './components/Cooks/Cooks'
import Foods from './components/Foods/Foods'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [cooks, setCooks] = useState([]);

  const handleCook = food => {
    const newCooks =[...cooks,food];
    setCooks(newCooks);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Recipes></Recipes>
      <div className='flex lg:flex-row flex-col-reverse gap-36'>
        <Foods handleCook={handleCook}></Foods>
        <Cooks cooks={cooks}></Cooks>
      </div>


    </div>
  )
}

export default App
