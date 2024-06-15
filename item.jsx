import React from 'react'

const Item = ({id,title,price,img,desc}) => {
  return (
    <article className='menu-item'>      
        <img src={img} alt={title} className='img'/>
        <div className='item-info'>
            <header>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        </header>
        
        <p>
            {desc}
        </p>
        </div>  

    </article>
  )
}

export default Item
