import React, {useState} from 'react'
import Test from './test'

function PopCard ({item, items, clickHandler}) {








// const handleDelete = (id: number) => {
//     setTodos(todos.filter(todo => todo.id !== id));

// }

  return (<>
    <button key={item.id} onClick={()=>clickHandler(item.id)}>{item.name}</button>
    {/* <Test /> */}
    </>
  )
}

export default PopCard