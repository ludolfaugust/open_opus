import React, {useState} from 'react'
import { useEffect } from 'react';
import EssentialId from './EssentialId';
import EssentialsCard from './EssentialsCard';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRouteMatch,
  
  } from "react-router-dom";

function GetEssentials() {
const [essentials, setEssentials] = useState([])




    const fetchEssentialsHandler = () => {
        fetch("https://api.openopus.org/composer/list/pop.json")
        .then(res => {
            return res.json()})
        .then((data)=> setEssentials(data.composers));
    } 
    useEffect(()=>{

        fetchEssentialsHandler()
    
    }, []);

   
  return (<>

<Routes>

    <Route path = "/" element={<EssentialsCard essentials = {essentials} setEssentials={setEssentials} />} />       
    <Route path = "/:id" element={ <EssentialId essentials={essentials} />} />       
    
   
</Routes>
    </>
  )
}

export default GetEssentials