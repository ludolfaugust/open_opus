import { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {

    const [popularComposer, setPopularComposer] = useState([])

    // useEffect(() => {
    //     fetch("https://api.openopus.org/composer/list/pop.json")
    //        .then((res) => {
    //         return res.json()
    //        })
    //        .then((data)=> setPopularComposer(data.composers))
    // }, []);

// console.log(popularComposer)

        useEffect(() =>{
            axios
        .get("https://api.openopus.org/composer/list/pop.json")
        .then(res => {
            console.log(res.data)
            setPopularComposer(res.data.results)
        })

        }, [])
    
        
    
    return popularComposer;
};

export default Popular;