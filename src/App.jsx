
import './App.css'
import Foods from './components/Foods/Foods'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <div className='max-w-7xl mx-auto'>
    <Header></Header> 
    <Recipes></Recipes>
    <Foods></Foods>
      
     
    </div>
  )
}

export default App
