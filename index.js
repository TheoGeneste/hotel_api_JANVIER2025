const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;
const RoomsRoutes = require('./routes/roomsRoutes');
const ClientRoutes = require('./routes/clientsRoutes');

// Précise à mon API que je vais utiliser du JSON
app.use(express.json());

// Précise à mon API que je vais utiliser des routes
// de mon fichier roomsRoutes.js
// ATTENTION : Toutes les routes de mon fichier roomsRoutes.js commenceront par /rooms
app.use('/rooms', RoomsRoutes);
app.use('/clients', ClientRoutes);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Lance mon serveur express
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});