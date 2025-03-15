const { PaymentModel } = require('../../../domain/models/paymentModel');

const savePayment = async (payment) => {
    const paymentDocument = new PaymentModel(payment);
    const savedPayment = await paymentDocument.save();
    return savedPayment;
};

module.exports = {
    savePayment
};