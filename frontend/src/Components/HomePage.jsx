import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ProductCard from './ProductCard';
import Header from './Header';
import axios from 'axios';
import imagesById from './data';  // Importamos el objeto imagesById

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define la función getImagesById
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
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Se ejecuta solo una vez al montar el componente

    const filteredProducts = products.filter(product =>
        product.name?.toLowerCase().includes('ow be right back')
    );

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <main className='cuerpo'>
                <img src="https://www.off---white.com/BWStaticContent/53000/26bc1ecf-9fb1-4bb4-a7af-f246bec08945_off-white-brb-batch-1-57.jpg" alt="Be Right Back" />
                <p className='brb'>"BE RIGHT BACK"</p>
                <p className='text_cuerpo'>
                    "BE RIGHT BACK", the new sneaker that encourages you to "BE WELL" by leaning into life’s gray areas—the everyday moments that get you from where you’ve been to where you’re going. As sequel and complement to the iconic "OUT OF OFFICE" sneaker designed by Virgil Abloh in 2020, the "BRB" is all about making you time so you can be your best self. Positioned at the intersection of sport and style, it features iconic Off-White™ codes, including a brand-new take on the signature Arrow for a sense of velocity.
                </p>

                <div className="product-cards">
                    {filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            productId={product.id}
                            productImages={product.images}
                            productName={product.name}
                            productDescription={product.description}
                            productPrice={`Precio: $${product.price}`}
                        />
                    ))}
                </div>

                <div className="gender_selection">
                    <a href="/products?gender=man">
                        <div className="gender_item">
                            <p>HOMBRE</p>
                            <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/60b579fe-c7b0-4baf-ad70-76fc30d5155f___c7585bf6ce77983e2ee8998a2325e0e8.jpg" alt="Hombre" />
                        </div>
                    </a>
                    <a href="/products?gender=woman">
                        <div className="gender_item">
                            <p>MUJER</p>
                            <img src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/4896be05-fecc-4c38-a589-98f1c280b15f___ad1c34ec624f56b2d45af4a8c466d1a8.jpg" alt="Mujer" />
                        </div>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
