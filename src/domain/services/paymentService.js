const validatePayment = (payment) => {
    if (!payment.amount) {
        throw new Error('amount is not defined');
    }
    if (!payment.method) {
        throw new Error('method is not defined');
    }
    if (!payment.currency) {
        throw new Error('currency is not defined');
    }
    if (!payment.product_id) {
        throw new Error('product_id is not defined');
    }
};

module.exports = {
    validatePayment
};