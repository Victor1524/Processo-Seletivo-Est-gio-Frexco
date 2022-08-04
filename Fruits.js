import React from 'react'
import "./Fruits.css"
import frutas from "../../front/img/frutas.jpg"


const Fruits = ({ fruitItems, handleAddFruit }) => {
    return(
        <div className="fruits">
            {fruitItems.map((fruitItem) =>(
                <div className="card">
                    <div>
                       <img className="fruit-image" src={frutas} alt={fruitItem.name}/>
                    </div>
                    <div>
                        <h3 className="fruit-name">Nome: {fruitItem.name}</h3>
                        <h3 className="fruit-name">Gênero: {fruitItem.genus}</h3>
                        <h3 className="fruit-name">Família: {fruitItem.family}</h3>
                        <h3 className="fruit-name">Ordem: {fruitItem.order}</h3>
                    </div>
                    
                    <div>
                        <button className="fruit-add-button" onClick={() => handleAddFruit(fruitItem)}>ADD CARINHO</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Fruits;