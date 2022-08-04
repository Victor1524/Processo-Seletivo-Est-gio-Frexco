import React, {useEffect, useState} from 'react'
import Header from './components/front/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/front/Routes/Routes'


const App = ()=>{

  const [vetor, setVetor] = useState([])

  useEffect(() => {
      obterDados()
  })

  const obterDados = async () => {
    const dados = await fetch('https://www.fruityvice.com/api/fruit/all')
    const fruitItems = await dados.json()

    setVetor(fruitItems)
  }
  
  const [cartItems, setCartItems] = useState([])

  const handleAddFruit = (fruit) =>{
    const FruitExist = cartItems.find((item) => item.id === fruit.id)
    if (FruitExist){
      setCartItems(
        cartItems.map((item)=> item.id=== fruit.id ? {...FruitExist, quantity:FruitExist.quantity + 1}: item))
    } else{
      setCartItems([...cartItems, {...fruit, quantity: 1 }])
    }
  }
  const handleRemoveFruit = (fruit) =>{
    const FruitExist = cartItems.find((item) => item.id === fruit.id)
    if (FruitExist.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== fruit.id))
    } else {
      setCartItems(cartItems.map((item)=> item.id === fruit.id ? {...FruitExist, quantity: FruitExist.quantity - 1}: item))
    }
  }
  const handleCartClear = ()=>{
    setCartItems([])
  }

  
  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes 
          fruitItems={vetor} 
          cartItems={cartItems} 
          handleAddFruit={handleAddFruit} 
          handleRemoveFruit={handleRemoveFruit}
          handleCartClear={handleCartClear}/>
       
      </Router>
    </div>
    )
}

export default App;