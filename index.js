const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;
const RoomsRoutes = require('./routes/roomsRoutes');
const ClientRoutes = require('./routes/clientsRoutes');
const ReservationsRoutes = require('./routes/reservationsRoutes');
const ServicesRoutes = require('./routes/servicesRoutes');
const PaymentsRoutes = require('./routes/paymentsRoutes');
const InclureRoutes = require('./routes/inclureRoutes');
const AuthRoutes = require('./routes/authRoutes');

// Précise à mon API que je vais utiliser du JSON
app.use(express.json());

// Précise à mon API que je vais utiliser des routes
// de mon fichier roomsRoutes.js
// ATTENTION : Toutes les routes de mon fichier roomsRoutes.js commenceront par /rooms
app.use('/rooms', RoomsRoutes);
app.use('/clients', ClientRoutes);
app.use('/reservations', ReservationsRoutes);
app.use('/services', ServicesRoutes);
app.use('/payments', PaymentsRoutes);
app.use('/inclures', InclureRoutes);
app.use('/auth', AuthRoutes);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Lance mon serveur express
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});