import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Read = () => {

    const [posts, setPosts]= useState([])
    const{id} = useParams()
    useEffect( ()=>{
        axios.get(`http://localhost:3000/user/${id}`)
        .then (res=> {
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [] )


  return (
    <div className="container"  >
        <h1>{posts.name}</h1>
        <h1>{posts.email}</h1>
        <img src ={posts.img} width="40%" />
        <br/>
        <Link to ="/"><button className='badge  bg-secondary'>Back</button></Link>
    </div>
  )
}

export default Read
