const { validatePayment } = require('../../src/domain/services/paymentService');
const { Payment } = require('../../src/domain/models/payment');

describe('validatePayment', () => {
    it('should throw an error if amount is not defined', () => {
        const payment = new Payment(undefined, 'PAYPAL', 'BRL', '87e9646a-8513-465d-b58d-6df44b9e4925');

        expect(() => validatePayment(payment)).toThrow('amount is not defined');
    });

    it('should throw an error if method is not defined', () => {
        const payment = new Payment(100, undefined, 'BRL', '87e9646a-8513-465d-b58d-6df44b9e4925');

        expect(() => validatePayment(payment)).toThrow('method is not defined');
    });

    it('should throw an error if currency is not defined', () => {
        const payment = new Payment(100, 'PAYPAL', undefined, '87e9646a-8513-465d-b58d-6df44b9e4925');

        expect(() => validatePayment(payment)).toThrow('currency is not defined');
    });

    it('should throw an error if product_id is not defined', () => {
        const payment = new Payment(100, 'PAYPAL', 'BRL', undefined);

        expect(() => validatePayment(payment)).toThrow('product_id is not defined');
    });

    it('should not throw an error if all fields are defined', () => {
        const payment = new Payment(100, 'PAYPAL', 'BRL', '87e9646a-8513-465d-b58d-6df44b9e4925');

        expect(() => validatePayment(payment)).not.toThrow();
    });
});