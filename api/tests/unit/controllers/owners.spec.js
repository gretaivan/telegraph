const ownersController = require('../../../controllers/owners')
const Owner = require('../../../models/Owner');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('owners controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('show', () => {
        test('it returns an owner with a 200 status code', async () => {
            jest.spyOn(Owner, 'findById')
                .mockResolvedValue(new Owner({ id: 1, name: 'Test Owner', address: 'London'} ));
                
            const mockReq = { params: { id: 1 } }
            await ownersController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    });
    
})