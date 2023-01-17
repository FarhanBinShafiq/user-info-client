import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const UpdateUser = () => {
    
    const {id}=useParams();
    const [user,setUser]=useState({})

    useEffect(()=>{
            fetch(`http://localhost:5000/users/${id}`)
            .then(res=>res.json())
            .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h2>name:{user.name}</h2>
            <p>Service:{user.service}</p>
            
        </div>
    );
};

export default UpdateUser;