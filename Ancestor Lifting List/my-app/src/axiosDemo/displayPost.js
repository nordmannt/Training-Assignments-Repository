import { useState } from "react";

const DisplayPost = ({ posts, handleEdit, handleDelete }) => {
  console.log("Posts in DisplayPost:", posts);
  
  const [isEditing, setIsEditing] = useState(false);  
  const [editPost, setEditedPost] = useState({ id: "", title: "", body: "" });  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleEditClick = (post) => {
    setIsEditing(true);
    setEditedPost({ id: post.id, title: post.title, body: post.body });
  };

  const handleSaveClick = () => {
    handleEdit(editPost);  
    setIsEditing(false);  
  };

  const handleCancelClick = () => {
    setIsEditing(false);  
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {!isEditing || editPost.id !== post.id ? (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>

              <button onClick={() => handleEditClick(post)}>Edit</button>  
              <button onClick={() => handleDelete(post.id)}>Delete</button>  
            </>
          ) : (
            <>
              <input
                type="text"
                name="title"
                value={editPost.title}
                onChange={handleInputChange}
                style={{ width: "300px", height: "30px", fontSize: "16px" }} 
              />
              <textarea
                name="body"
                value={editPost.body}
                onChange={handleInputChange}
                style={{ width: "500px", height: "50px", fontSize: "16px" }} 
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayPost;
