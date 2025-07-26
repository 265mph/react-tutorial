import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="nav-bar">
            <h4>My Tweeter Blog</h4>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;