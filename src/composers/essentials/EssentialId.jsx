import React from 'react'
import {useParams} from 'react-router-dom'; 

function EssentialId({essentials}) {

    const {id} = useParams();

   const filtered = essentials.filter((single)=> single.id === id);

   console.log(filtered)

  return (
    <div>
        {essentials.filter((single) => single.id === id).map((
            single => (
                <h1>{single.name}</h1>
            )
        ))}
        
    </div>
  )
}

export default EssentialId