import  BlogList  from './bloglist'
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, pending, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { pending && <div>Loading Blogs...</div> }
            { blogs && <BlogList blogs={blogs} title="All Channels"></BlogList> }
        </div>
    );
}
 
export default Home;