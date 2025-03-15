const axios = require('axios');
const { processPayment } = require('../../src/application/usecases/processPayment');

jest.mock('axios');

describe('processPayment', () => {
    beforeAll(() => {
        process.env.EXTERNAL_PAYMENT_API_URL = 'http://localhost:3100';
    });

    // it('should return paymentId and status when the external API call is successful', async () => {
    //     const paymentData = {
    //         amount: 100,
    //         currency: 'BRL',
    //         method: 'PAYPAL',
    //         product_id: '87e9646a-8513-465d-b58d-6df44b9e4925'
    //     };
    //     const tx_id = 'b01b823b-9931-4438-b55f-782ed0b5b4c2';
    //     const status = 'processed';

    //     axios.post.mockResolvedValue({ data: { tx_id, status } });

    //     const result = await processPayment(paymentData);

    //     expect(result).toEqual({ paymentId: tx_id, status });
    //     expect(axios.post).toHaveBeenCalledWith(`${process.env.EXTERNAL_PAYMENT_API_URL}/init-payment`, paymentData);
    // });

    it('should throw an error when the external API call fails', async () => {
        const paymentData = {
            amount: 100,
            currency: 'BRL',
            method: 'PAYPAL',
            product_id: '87e9646a-8513-465d-b58d-6df44b9e4925'
        };

        axios.post.mockRejectedValue(new Error('Error initiating payment with external provider'));

        await expect(processPayment(paymentData))
            .rejects
            .toThrow('Error initiating payment with external provider');
    });
});