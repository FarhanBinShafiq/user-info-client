import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [users,setUser]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    const handleDelete=id=>{
        const url=`http://localhost:5000/users/${id}`

        fetch(url,{
            method:'DELETE',
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remainingUser=users.filter(user=>user._id !==id)
                setUser(remainingUser);
            }
        })
    }

    return (
        <div>
            <h2>This is Users Info</h2>
            
            <h2>Total user:{users.length}</h2>
            {
                users.map(user=><li>{user.name} ::: {user.service} 
                <Link to={`/users/update/${user._id}`}><button >Update</button> </Link>
                <button onClick={()=>handleDelete(user._id)}>X</button></li>)
            }
        </div>
    );
};

export default Users;