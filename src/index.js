require('dotenv').config();
const express = require('express');
const paymentRoutes = require('./adapters/inbound/http/routes/paymentRoutes');
const { connectDatabase } = require('./config/database');

const app = express();
app.use(express.json());
app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});

module.exports = app;