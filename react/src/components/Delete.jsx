import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Delete = () => {
  
    
    const [users, setUsers]= useState([])
    const {id} = useParams();  

    useEffect( ()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then (res=> {
            setUsers(res.data)
        })
        .catch(err=>{
            console.log( err);
        })
    }, [] )

    const navigation = useNavigate();

    const submitHandler =() => {
        axios.delete(`http://localhost:3000/user/${id}`)
        
          navigation('/');
        
        
    }

  return (
    <>

    
      <form className='container' onSubmit={submitHandler}> 
       
           <input
             type='text'
             value={users.name}
             placeholder='NAME'
             onChange={(e) => setUsers({...users, name:e.target.value})}
             />

        <input
             type='email'
             value={users.email}
             placeholder='E-MAIL'
             onChange={(e) => setUsers({...users, email:e.target.value})}
             />

        <input
             type='img'
             value={users.img}
             placeholder='IMAGE'
             onChange={(e) => setUsers({...users, img:e.target.value})}
             />
      
      <button className='badge  bg-danger'>Delete</button>
      <Link to ="/"><button className='badge  bg-secondary'>Back</button></Link>
      
       
      </form>
    </>
  )
}

export default Delete
