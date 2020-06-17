import React, { useEffect, useState } from "react";
import Spinner from "./Spiner";

const withDataLoader = (Component,url) => {
  return function Container() {
    const[data, setData] = useState('')

    useEffect(()=>{
        get()
    },[])

    const get = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    };
 
    return data === ''? <Spinner/>:<Component data={data}/>
  };
};

export default withDataLoader;
