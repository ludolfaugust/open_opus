import React, {useState} from 'react';
import GetData from './GetData';
import PopCard from './PopCard';


const Popular = () => {

 const [items] = GetData()

// const clickHandler = (id) => {
//         console.log(id)
//         setData(data.filter(item => item.id !==id))
//         console.log(items.length)
    
//     }

    return (
        <div>
       {items.map((item) =>(
        <PopCard key={item.id} item={item} items={items} />

))}
       hello
         
        </div>
    );
};

export default Popular;