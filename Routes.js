import React from 'react'
import Fruits from '../Home/Fruits'
import Cart from '../Cart/Cart'
import {Switch, Route} from 'react-router-dom'

const Routes = ({fruitItems, cartItems, handleAddFruit, handleRemoveFruit, handleCartClear}) =>{
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Fruits fruitItems={fruitItems} handleAddFruit={handleAddFruit}/>
                </Route>
               
                <Route path="/cart" exact>
                    <Cart 
                        cartItems={cartItems} 
                        handleAddFruit={handleAddFruit} 
                        handleRemoveFruit={handleRemoveFruit}
                        handleCartClear={handleCartClear}/>
                </Route>
             </Switch>
        </div>
    )
}

export default Routes