const axios = require('axios');

const initiatePayment = async (payment) => {
    try {
        console.log('Initiating payment with external provider');
        console.log(process.env.EXTERNAL_PAYMENT_API_URL);

        debugger;

        const response = await axios.post(`${process.env.EXTERNAL_PAYMENT_API_URL}/init-payment`, {
            amount: payment.amount,
            currency: payment.currency, 
            payment_method: payment.method,
            product_id: payment.product_id 
        });
        return response.data;
    } catch (error) {
        throw new Error('Error initiating payment with external provider');
    }
};

module.exports = {
    initiatePayment
};