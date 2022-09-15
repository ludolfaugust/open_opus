import React, { FC, useEffect, useState } from "react";



interface UsePopular{
    searchQuery: unknown;
    loadComposers: (searchQuery: any) => never;
   
}





export const usePopular: FC<UsePopular> = () => {


    const BASE_URL = "https://api.openopus.org/composer/list/";
    
      const [items, setItems] = useState(null);
    

      const loadComposers = (searchQuery: unknown) => {
        const url = searchQuery
          ? `${BASE_URL}/search/${searchQuery}.json`
          : `${BASE_URL}pop.json`;
        setItems(null);
        fetch(url)
          .then((res) => {
            if (!res.ok) alert("Error Message");
            return res.json();
          })
          .then((data) => setItems(data.composers || []))
          .catch((err) => console.log("Error Message"));
          return url;
      };
    
      useEffect(loadComposers, []);
    
      return [items, loadComposers];
    }
    

