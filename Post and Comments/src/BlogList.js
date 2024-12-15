function BlogList({ blogs = [], title }) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
        }}
      >
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div
            className="blog-preview"
            key={blog.id}
            style={{
              width: '600px',
              margin: '10px 0',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default BlogList;