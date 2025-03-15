const axios = require('axios');

const getPaymentStatus = async (paymentId) => {
    try {
        const response = await axios.get(`${process.env.EXTERNAL_PAYMENT_API_URL}/list-payment/${paymentId}`);
        return {
            paymentId: paymentId,
            status: response.data.status
        };
    } catch (error) {
        throw new Error('Error fetching payment status from external provider');
    }
};

module.exports = {
    getPaymentStatus
};