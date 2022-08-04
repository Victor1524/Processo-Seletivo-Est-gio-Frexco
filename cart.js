import React from 'react';
import "./Cart.css"
import frutas from "../../front/img/frutas.jpg"

const Cart = ({cartItems, handleAddFruit, handleRemoveFruit, handleCartClear}) => {
  return (
      <div className="cart-items">
          <h2 className="cart-items-header">Carrinho de itens</h2>
          <div className='clear-cart'>
              {cartItems.length >= 1 && (<button className="clear-cart-button" onClick={handleCartClear}><i class="fas fa-cart-arrow-down"></i></button>)}
          </div>

          {cartItems.length === 0 && (<div className="cart-items-empty">Carrinho vazio</div>)}
          <div className="fruits">
              {cartItems.map((item)=>(
                  <div className="card-cart">
                      <div>
                          <img className="fruit-image" src={frutas} alt={item.name}/>
                      </div>

                      <div>
                          <h3 className="fruit-name">Nome: {item.name}</h3>
                          <h3 className="fruit-name">Carboidrato: {item.nutritions.carbohydrates}</h3>
                          <h3 className="fruit-name">Proteina: {item.nutritions.protein}</h3>
                          <h3 className="fruit-name">Gordura: {item.nutritions.fat}</h3>
                          <h3 className="fruit-name">Calorias: {item.nutritions.calories}</h3>
                          <h3 className="fruit-name">Açucar: {item.nutritions.sugar}</h3>
                      </div>

                      <div key={item.id} >
                       
                        <div className="cart-items-quantity">{item.quantity}</div>
                        <div className="cart-items-function">
                            <button className='cart-items-add' onClick={() => handleAddFruit(item)}>+</button>
                            <button className='cart-items-remove' onClick={() => handleRemoveFruit(item)}>-</button>
                        </div>
                        
                       
                    </div>
                  </div>
                  
              ))}
          </div>
      </div>
  )
}

export default Cart;