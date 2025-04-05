import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Post = () => {

    const[posts, setPosts] = useState([])

    useEffect ( ()=> {
        axios.get("http://localhost:3000/user")
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch( err => {
            console.log(err);
        })
    }, [posts] )

    const list = posts.map(post=> <li>
        <h1> {post.name} </h1> 
         <img src={post.img} width="20%"/>
         
         <Link to = {`/post/${post.id}`}> <button className='badge  bg-success'>Read</button> </Link>
         <Link to = {`/update/${post.id}`}> <button className='badge  bg-warning text-dark'>Update</button> </Link>
         <Link to = {`/delete/${post.id}`}> <button className='badge  bg-danger'>Delete</button> </Link>
         
         
       <hr />
         </li>)
 
  return (
    <ol className='container'>
       
        {list}
      
    </ol>
  )
}

export default Post
