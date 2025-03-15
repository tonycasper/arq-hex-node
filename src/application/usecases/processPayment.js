const { Payment } = require('../../domain/models/payment');
const { validatePayment } = require('../../domain/services/paymentService');
const { initiatePayment } = require('../../adapters/outbound/services/externalPaymentService');
const { savePayment } = require('../../adapters/outbound/repositories/paymentRepository');

const processPayment = async (paymentData) => {
    debugger;
    const payment = new Payment(
        paymentData.amount, 
        paymentData.method,
        paymentData.currency, 
        paymentData.product_id
    );
    validatePayment(payment);
    const result = await initiatePayment(payment);
    const savedPayment = await savePayment(payment);
    
    return {
        paymentId: savedPayment.id,
        status: result.status
    };
};

module.exports = {
    processPayment
};