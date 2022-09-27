import React, {useState} from 'react'

const array = [{name:"ho", id: 1}, {name:"ha", id: 2}, {name:"he", id: 3}, {name:"hi", id: 4}]

function Test() {
const [data, setData] = useState(array)

const deleteHandler = (id) =>{
  setData(data.filter((item)=> item.id !== id))
}



  return (
    <div>
        {data.map((i) =>
        <button key={i.id} onClick={()=>deleteHandler(i.id)}>{i.name}</button>
        )}
    </div>
  )
}

export default Test