import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = '722c05c77ee94c99bb4d8d5e18dedddc';

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    )
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
  }, []);

  return(
    <NewsContext.Provider value={{data}}>
    {props.children}
    </NewsContext.Provider>
  )

}