const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const nock = require('nock');
const http = require('http');
const app = require('../../src/index');

describe('Payment Integration Tests', () => {
    let mongoServer;
    let server;

    jest.setTimeout(30000);

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();

        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }

        nock('http://localhost.com:3100')
            .post('/init-payment')
            .reply(201, {
                tx_id: 'b01b823b-9931-4438-b55f-782ed0b5b4c2',
                status: 'processed',
            });

        server = http.createServer(app);
        await new Promise(resolve => server.listen(resolve));
    });

    afterAll(async () => {
        try {
            await mongoose.connection.close();

            if (mongoServer) {
                await mongoServer.stop();
            }

            nock.cleanAll();

            await new Promise((resolve, reject) => {
                server.close((err) => (err ? reject(err) : resolve()));
            });
        } catch (error) {
            console.error('Error closing resources:', error);
        }
    });

    it('should process a payment', async () => {
        const paymentData = {
            amount: 3452,
            currency: 'BRL',
            method: 'PAYPAL',
            product_id: '87e9646a-8513-465d-b58d-6df44b9e4925'
        };

        const response = await request(server)
            .post('/payments/')
            .send(paymentData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('status', 'processed');
    });

    it('should get payment status', async () => {
        const paymentId = 'b01b823b-9931-4438-b55f-782ed0b5b4c2';
        const response = await request(server)
            .get(`/payments/${paymentId}/status`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status');
    });
});
