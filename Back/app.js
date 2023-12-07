const express = require('express');
const connectDB = require('./src/database/db');
const config = require('./src/config/config'); // Importa tu archivo de configuración
const app = express();

// Usa el puerto definido en tu archivo de configuración
const port = config.port;

// Conectar a la base de datos
connectDB();

// Importa tus rutas
const routes = require('./src/routes/helloRoutes');

// Configura tus rutas
app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;