const Dog = require('../../../models/Dog');
const Owner = require('../../../models/Owner');

jest.mock('../../../models/Owner');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Dog', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with dogs on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Dog.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with dog on successful db query', async () => {
            let dogData = { id: 1, name: 'Test Dog' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ dogData] });
            const result = await Dog.findById(1);
            expect(result).toBeInstanceOf(Dog)
        })
    });

    describe('create', () => {
        test('it resolves with dog on successful db query', async () => {
            let dogData = { name: 'Test Dog', age: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...dogData, id: 1 }] });
            const result = await Dog.create(dogData);
            expect(result).toHaveProperty('id')
        })
    });
    
})