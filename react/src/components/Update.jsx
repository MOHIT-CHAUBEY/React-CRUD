import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Read from './Read'


const Update = () => {

  
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
        axios.put(`http://localhost:3000/user/${id}`, users)
        
          navigation('/');
    }

  return (
    <div >

    
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
      
      <button className='badge  bg-warning text-dark'>Update</button>
       <Read/>
     
      


      </form>
    </div>
  )
}

export default Update
