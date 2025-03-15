const { processPayment } = require('../../../../application/usecases/processPayment');
const { getPaymentStatus } = require('../../../../application/usecases/getPaymentStatus');

const processPaymentHandler = async (req, res) => {
    try {
        const paymentData = req.body;
        const result = await processPayment(paymentData);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPaymentStatusHandler = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const result = await getPaymentStatus(paymentId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    processPayment: processPaymentHandler,
    getPaymentStatus: getPaymentStatusHandler
};

