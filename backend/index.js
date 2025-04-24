require('dotenv').config(); // Carga las variables de entorno

const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users'); 
const imageRoutes = require('./routes/images');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la tienda de ropa tino_uli');
});

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/images', imageRoutes);

// Conexión a la base de datos y levantado del servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos establecida correctamente.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ No se pudo conectar a la base de datos:', err.message);
  });
