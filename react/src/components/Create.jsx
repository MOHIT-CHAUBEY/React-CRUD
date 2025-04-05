import React from 'react'
 import axios from 'axios'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { Link } from 'react-router-dom'

const Create = () => {

    const navigation = useNavigate();
    const [datas, setDatas] = useState ({name:"", email:"", img:""})
    
    
    const create = ()=> {
       
        console.log("HELLO BOSS");
        axios.post("http://localhost:3000/user", datas)
        navigation("/");
    }
  return (
    <div >

        <input
             type='text'
             placeholder='NAME'
             onChange={(e) => setDatas({...datas, name:e.target.value})}
             />

        <input
             type='email'
             placeholder='E-MAIL'
             onChange={(e) => setDatas({...datas, email:e.target.value})}
             />

        <input
             type='img'
             placeholder='IMAGE'
             onChange={(e) => setDatas({...datas, img:e.target.value})}
             />
      
      <button className='badge bg-info text-muted' onClick={ create}>Create</button>
      <Link to ="/"><button className='badge  bg-secondary'>Back</button></Link>

      <div style={ {padding:"2%", backgroundColor:"gold" }}>
        <h1> {datas.name} </h1>
        <h1> {datas.email} </h1>
        <h1> {datas.img} </h1>
      </div>
      

    </div>
  )
}

export default Create
