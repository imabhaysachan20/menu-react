import React from 'react'
import Item from './item'

const Items = ({item}) => {
  return (
    
    <div className='section-center'>
        
      {
        item.map((item)=>{
            return <Item key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default Items
