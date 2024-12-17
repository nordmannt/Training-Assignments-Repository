import { useState, useEffect } from "react";
import CommentDisplayComponent from "./CommentDisplayComponent";

const ListandKeysComponent = () => {
    const [comments, setComments] = useState([
        {
            "id": 1,
            "name": "John Doe",
            "email": "johndoe@example.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "janesmith@example.com"
        },
        {
            "id": 3,
            "name": "Sam Johnson",
            "email": "samjohnson@example.com"
        }
    ]);

    const handleDelete = (id) => {
        setComments(comments.filter(comment => comment.id !== id));  // Use strict inequality (!==) for comparison
    };

    const [name, setName] = useState("Jasdhir");

    useEffect(() => {
        console.log("useEffect called...");
    }, []);  // Empty dependency array ensures this runs only on mount

    return (
        <>
            <h2>List and Keys</h2>
            <CommentDisplayComponent comments={comments} handleDelete={handleDelete} />
            <button onClick={() => setName('Andrew')}>Change Name</button>
        </>
    );
};

export default ListandKeysComponent;
