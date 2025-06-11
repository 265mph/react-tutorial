const Navbar = () => {
    const handleNewPost = (e) => {
        console.log('ref',e)
    }

    return ( 
        <nav className="nav-bar">
            <h4>My Tweeter Blog</h4>
            <div className="links">
                <li><a href="/">Home</a></li>
                <li onClick={() => handleNewPost()}><a href="/create">Create New Post</a></li>
            </div>
        </nav>
    );
}
 
export default Navbar;