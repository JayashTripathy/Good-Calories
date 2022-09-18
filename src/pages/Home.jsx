import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"


export const Home = () => {
    const[url, setUrl] = useState("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=9b90f55ec50911a5a29c699bb615267d&hash=d7780ab0c090b600530fc748a9f6bcf1")
    const[item, setItem] = useState("")
    useEffect(() => {
       const fetch = async() => {
           const res = await axios.get(url)
           console.log(res.data.data.results);
           setItem(res.data.data.results);
       }
       fetch();
    },[url])

    
    
  return (<>
    <div>Home</div>
  </>
  )
}
