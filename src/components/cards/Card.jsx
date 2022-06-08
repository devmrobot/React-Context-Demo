import React from 'react'
import './Card.scss';

const Card = ({price, name,description,picture,id}) => {
  
    const handleAddCart=()=>{
    //Add to cart the Id
        alert(+1);
    }  

    const HandleRemoveCart=()=>{
        alert(-1);
    }

    return (
        <div className="Card">
            <h2>{name}</h2>
            <img src={picture} alt={name} />
            <p className='CardPriceBtn'>
                <span className="descLeft"> Prix : {price} €</span>
                <span className="descRight">
                    <span className="AddBtn Btn" onClick={handleAddCart}>+</span>
                    <span className="RemoveBtn Btn" onClick={HandleRemoveCart}>-</span>
                </span>
            </p>
            <p className='CardDescription'>{description}</p>

        </div>
    )
}

export default Card