const axios = require('axios');
const { getPaymentStatus } = require('../../src/application/usecases/getPaymentStatus');

jest.mock('axios');

describe('getPaymentStatus', () => {
    beforeAll(() => {
        process.env.EXTERNAL_PAYMENT_API_URL = 'http://localhost:3100';
    });

    it('should return paymentId and status when the external API call is successful', async () => {
        const paymentId = 'b01b823b-9931-4438-b55f-782ed0b5b4c2';
        const status = 'processed';

        axios.get.mockResolvedValue({ data: { status } });

        const result = await getPaymentStatus(paymentId);

        expect(result).toEqual({ paymentId, status });
        expect(axios.get).toHaveBeenCalledWith(`${process.env.EXTERNAL_PAYMENT_API_URL}/list-payment/${paymentId}`);
    });

    it('should throw an error when the external API call fails', async () => {
        const paymentId = 'b01b823b-9931-4438-b55f-782ed0b5b4c2';

        axios.get.mockRejectedValue(new Error('API call failed'));

        await expect(getPaymentStatus(paymentId)).rejects.toThrow('Error fetching payment status from external provider');
    });
});