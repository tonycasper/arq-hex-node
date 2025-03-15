const express = require('express');
const { processPayment, getPaymentStatus } = require('../controllers/paymentController');

const router = express.Router();

router.post('/', processPayment);
router.get('/:paymentId/status', getPaymentStatus);

module.exports = router;