const axios = require('axios');

const PAYMENT_PROVIDER_URL = process.env.PAYMENT_PROVIDER_URL || 'https://mock-payment-provider.com';

exports.initiatePayment = async (paymentData) => {
    return { id: '12345', status: 'pending', ...paymentData };
};

exports.getPaymentStatus = async (paymentId) => {
    return { id: paymentId, status: 'completed' };
};

