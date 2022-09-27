import React, { useEffect, useState } from "react";
import Popular from "./Popular";

const BASE_URL = "https://api.openopus.org/composer/list/";

const UsePopular = () => {


    
    
      const [items, setItems] = useState([]);
    

      useEffect(() => {
        fetch(BASE_URL)
          .then((res) => {
            if (!res.ok) alert("Error Message");
            return res.json();
          })
          .then((data) => setItems(data.composers))
          .catch((err) => console.log("Error Message"));
      }, []);
    
     

      
    
      return

      {items.map((item)
        <h1>{item.name}</h1>
        )}
    }

    export default UsePopular;
    

