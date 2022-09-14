import { useEffect, useState } from "react";
import axios from "axios";
import Popular from "./Popular";
import React from "react";

const UsePopular = () => {

    const [popularComposers, setPopularComposers] = useState<any[]>([])

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
            setPopularComposers(res.data.composers)
        })

        }, [])
    
        console.log(popularComposers)

        // const list = popularComposer.map((pc) => {
        //     const composer = {
        //         name: pc.name,

        //     }
        // }
        // )

        

            


    return (
        <>
               {popularComposers.map((pc: any, index: number) =>{
                return <><div key={index}>{pc.name}</div>
                <img src={pc.portrait} />
                </>
               })}

        </>
    )
};

export default UsePopular;