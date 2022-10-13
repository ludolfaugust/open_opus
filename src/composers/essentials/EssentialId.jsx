import React from 'react'
import {useParams, Link} from 'react-router-dom'; 
import SingelEssential from './SingelEssential';

function EssentialId({essentials}) {

    const {id} = useParams();

   const filtered = essentials.filter((single)=> single.id === id);

   console.log(filtered)

  return (
    <div>
        {essentials.filter((single) => single.id === id).map((
            single => (
                <SingelEssential name={single.complete_name} portraits={single.portrait} birth={single.birth} death={single.death} epoch={single.epoch} />
            )
        ))}
    </div>
  )
}

export default EssentialId