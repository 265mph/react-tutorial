import { Link } from "react-router-dom";

const  BlogList = ({blogs, title}) => {

    return ( 
        <div className="bloglist">
            <h4 className="title">{title}</h4>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h4>{blog.title}</h4>
                        <p>Covered by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
  
export default  BlogList;