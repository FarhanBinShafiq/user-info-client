import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef=useRef()
    const serviceRef=useRef();
  
    const handleSubmit=(e)=>{
        const name=nameRef.current.value;
        const service=serviceRef.current.value;
        
        const newUser={name,service}

        fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
            alert(`got the new user  `)
        }
      })
 

        e.preventDefault();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <br/><br/>
                <input type="text" ref={nameRef} placeholder='Full name' /> <br/><br/>
                <input type="text" ref={serviceRef} placeholder='Services' /><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;