import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            { pending && <div>Loading Blog...</div> }
            { error && <div>{error}</div> }
            { blog && <article>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-author">Platformed by: {blog.author}</p>
                <p className="blog-body">{blog.body}</p>
            </article> }
        </div>
    );
}
 
export default BlogDetails;