const request = require('supertest');
const app = require('../../src/app');
const conenection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await conenection.migrate.rollback();
        await conenection.migrate.latest();
    })

    afterAll(async () => {
        await conenection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "MAC",
                email: "mac@contato.com",
                whatsapp: "3138052452",
                city: "Ipatinga",
                uf: "MG"
            })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })

})