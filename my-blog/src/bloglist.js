 const  BlogList = ({blogs, title}) => {

    return ( 
        <div className="bloglist">
            <h4 className="title">{title}</h4>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>Covered by {blog.author}</p>
                </div>
            ))}
        </div>
     );
 }
  
 export default  BlogList;