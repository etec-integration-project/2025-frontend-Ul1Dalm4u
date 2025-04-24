import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductPage.css';
import imagesById from './data'; // Importamos el objeto imagesById

const ProductPage = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();

    // Define la función getImagesById que usa imagesById de data.js
    const getImagesById = (id) => {
        return imagesById[id] || []; // Devuelve las imágenes si existen, o un array vacío si no
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                const fetchedProducts = response.data.map(product => {
                    const productImages = getImagesById(product.id);
                    return {
                        ...product,
                        images: productImages,
                    };
                });
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const gender = query.get('gender');

        let results = products;
        if (searchQuery) {
            results = results.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (gender) {
            results = results.filter(product =>
                product.gender.toLowerCase() === gender.toLowerCase()
            );
        }

        setFilteredProducts(results);
    }, [location.search, products, searchQuery]);

    return (
        <div className="product-page">
            <h4>
                Resultados de búsqueda para: {searchQuery ? searchQuery : 'Género Seleccionado'}
            </h4>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            productImages={product.images}
                            productName={product.name}
                            productDescription={product.description}
                            productPrice={`Precio: $${product.price}`}
                        />
                    ))
                ) : (
                    <p>No se encontraron productos</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
