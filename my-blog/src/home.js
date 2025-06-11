import { useState, useEffect } from 'react'
import  BlogList  from './bloglist'

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [pending, isPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                isPending(false)
                setError(null)
            })
            .catch(err => {
                setError('Error fetching data')
                isPending(false)
                console.log('fetch error:',err.message)
            })
    }, [])

    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { pending && <div>Loading Blogs...</div> }
            { blogs && <BlogList blogs={blogs} title="All Channels"></BlogList> }
        </div>
    );
}
 
export default Home;