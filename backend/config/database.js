require('dotenv').config(); // Cargar las variables de entorno

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    retry: {
      max: 10,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Probar la conexión
sequelize.authenticate()
  .then(() => console.log('✅ Conexión exitosa a MySQL'))
  .catch(err => {
    console.error('❌ Error al conectar a MySQL:', err);
    process.exit(1);
  });

module.exports = sequelize;
