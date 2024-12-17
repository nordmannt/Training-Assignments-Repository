//const CommentDisplayComponent = (props) => {
 //   const comments = props.comments;
 const CommentDisplayComponent = ({ comments, handleDelete }) => {
    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <button onClick={() => handleDelete(comment.id)}>Delete Comment</button>
                </div>
            ))}
        </>
    );
}

export default CommentDisplayComponent;
