import React, {useState} from 'react';
import './style.css';

/**
 * @author
 * @function Navbar
 */

const Navbar = (props) => {
    
    const[search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');

    }
    

    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active': 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
             <div className="searchIcon">
                 <form onSubmit={submitSearch}>
                 <input type="text" className={searchClass} placeholder="Search" />
                 <img onClick={openSearch} className="searchIcon"src="https://i.imgur.com/MMF4t77.png" alt="SearchIcon"></img>
                 </form>
                 
             </div>
        </div>
    )

}

export default Navbar 