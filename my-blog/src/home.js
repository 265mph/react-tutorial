const Home = () => {
    const handleNewPost = (e) => {
        // alert('Create New Post')
        console.log('ref',e)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={(e) => handleNewPost(e)}>Click Me</button>
        </div>
    );
}
 
export default Home;