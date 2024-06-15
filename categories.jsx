import React from 'react'

const Categories = ({category,filterFunc}) => {
  return (
    <div className='btn-container'>
      {
        category.map((cat)=>{
            return <button onClick={()=>{filterFunc(cat)}} key={cat} className='btn'>{cat}</button>
        })
      }
    </div>
  )
}

export default Categories
