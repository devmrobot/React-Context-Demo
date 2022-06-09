import React from 'react';

import './Card.scss';

const Card = ({price, name,description,picture,id}) => {

    const handleAddCart=()=>{
    //Add to cart the Id
   
   
    }  

    const HandleRemoveCart=()=>{
       
    }

    return (
        <div className="Card">
            <h2>{name}</h2>
           <div className="CardImgContainer"><img src={picture} alt={name} /></div> 
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