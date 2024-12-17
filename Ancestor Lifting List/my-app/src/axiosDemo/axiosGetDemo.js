import { useState, useEffect } from "react";
import axios from 'axios';
import DisplayPost from './displayPost.js';  
import './axios.css';

const AxiosGetDemo = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title:'',
        body:''
    });

    useEffect(() => {
        axios.get("http://localhost:8000/posts")  
            .then(res => {
                console.log("Fetched posts:", res.data); 
                setPosts(res.data);
            })
            .catch(err => {
                console.error("Error fetching posts:", err); 
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
          ...prevPost,
          [name]: value,
        }));
      };
    
    const handlePostSubmit =(e)=> {
        e.preventDefault();

        if(!newPost.title || !newPost.body){
            alert("Both fields are required");
            return;
        }

        axios.post("http://localhost:8000/posts", newPost)
             .then((res) => {
                setPosts([...posts, res.data]);
                setNewPost({title:'',body:''});
             })
             .catch(err => {
                console.error("Error posting new message:", err);
             });

    };  
    const handleEdit = (updatedPost) => {
        axios.put(`http://localhost:8000/posts/${updatedPost.id}`, updatedPost)  
          .then(() => {  
              setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));  
          })
          .catch(err => {  
              console.error("Error editing post:", err);  
          });
      };
      

    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/posts/${id}`)  
            .then(() => {  
                setPosts(posts.filter(post => post.id !== id));  
            })
            .catch(err => {  
                console.error("Error deleting post:", err);  
            });
    };

    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left', 
          padding: '20px',
          width: '80%', 
          maxWidth: '850px', 
          backgroundColor: '#f0f0ff', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px', 
          margin: '20px auto', 
        }}>
            <br>
            </br>
            <h2>Daily News</h2>
            <br>
            </br>
            <DisplayPost 
            posts={posts} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}/>
            <br>
            </br> 
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5px' }}>
            <h3 >Create a New Post</h3>
            </div>
            
            <form onSubmit={handlePostSubmit}>
                <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                placeholder="Enter title"
                required
                />
                <textarea
                name="body"
                value={newPost.body}
                onChange={handleInputChange}
                placeholder="Enter your message"
                required/>
                <button type="submit">Post Message</button>
            </form>
        </div>
    );
};

export default AxiosGetDemo;
