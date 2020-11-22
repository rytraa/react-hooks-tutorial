import axios from "axios"
import React,{useState,useEffect} from 'react'
import './DataFetching.css'

function DataFetching() {
    
    const [post,setPost] = useState({})
    const [id,setId] = useState('1')
    const [idFromClick,setIdFromClick] = useState(id)
    
    const handleClick = () => {
        setIdFromClick(id)
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromClick])
    
    
    return (
        <div>
        <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Data</button>
        <h3>{post.title}</h3>
        </div>
        )
    }
    
    export default DataFetching
    