import React, { useState } from 'react';
import { CiSearch, CiHeart, CiBag1 } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './Searchbar';
import './HomePage.css'; // Asegúrate de tener estilos para el Header

const Header = ({ onSearch }) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const navigate = useNavigate();

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearchSubmit = (searchQuery) => {
        onSearch(searchQuery);
        setSearchVisible(false);
        navigate('/search', { state: { searchQuery } });
    };

    return (
        <div>
            <header>
                <p>Perito Moreno 2397, Godoy Cruz</p>
                <Link to='/' className='title-link'>
                    <h3 className='title'>ULI _ TINO</h3>
                </Link>
                <div className='top_right_header'>
                    <Link to='/login' aria-label="Login">
                        <p>Login</p>
                    </Link>
                    <CiSearch aria-label="Search" onClick={toggleSearch} />
                    <CiHeart 
                        aria-label="Favorites" 
                        onClick={() => navigate('/favorites')} 
                        className="icon-link"
                    />
                    <CiBag1 
                        aria-label="Shopping Cart" 
                        onClick={() => navigate('/cart')} 
                        className="icon-link"
                    />
                </div>
            </header>
            {searchVisible && <SearchBar onClose={toggleSearch} onSubmit={handleSearchSubmit} />}
            {searchVisible && <div className="overlay" onClick={toggleSearch}></div>}
        </div>
    );
};

export default Header;
