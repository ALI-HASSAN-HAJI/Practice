import React, { useEffect, useState } from "react";
import userApi from "../Api/userApi";


const User = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        userApi.get('/')
        .then(({data}) => {
            setData(data)
            console.log(data)
        })
        
    }
    useEffect(() => {
     fetchData();
    }, [])
    return(
        <div>
      <h1>User Api:</h1>
      <p>{data.name}</p>
      <p>{data.visibility}</p>
      <h3>{data.id}</h3>
      <h3>{data.latitude}</h3>
      <h3>{data.longitude}</h3>
      <h4>{data.velocity} {data.units}</h4>
        </div>
    )
}

export default User;