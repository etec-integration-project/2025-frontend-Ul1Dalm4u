// SearchBar.js
import React, { useState } from 'react';
import './Searchbar.css';

const SearchBar = ({ onClose, onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value); // Actualiza el estado con el valor del input
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        if (searchQuery.trim()) { // Verifica que no esté vacío
            onSubmit(searchQuery); // Envía la búsqueda al componente padre (Header)
            onClose(); // Cierra la barra de búsqueda
        }
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleSearchSubmit} className='search-form'>
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className='search-input'
                    value={searchQuery}
                    onChange={handleSearchInput}
                />
                <button type="submit" className='search-button'>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;
