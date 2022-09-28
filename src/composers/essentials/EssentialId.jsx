import React from 'react'
import {useParams, Link} from 'react-router-dom'; 

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
         <Link path to= "/">Back Home</Link>
    </div>
  )
}

export default EssentialId