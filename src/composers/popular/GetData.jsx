import React, { useEffect, useState } from 'react';
const GetData = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch("https://api.openopus.org/composer/list/pop.json")
        .then((res) => res.json())
        .then((data)=> setItems(data.composers))
    }, [])



    return [items]
};

export default GetData;