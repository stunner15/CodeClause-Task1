import React from 'react'



import Items from './Items';


const Content = ({items,handleCheck,handleDelete}) => {
   
  return (
    
    <main>
        {(items.length)?(
            <Items
            items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}/>
        ):(
            <p style={{marginTop:'2rem'}}>Your list is Empty</p>
        )
}
    </main>
  )
}

export default Content