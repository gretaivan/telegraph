describe('dogs endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    })

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('should return a list of all dogs in database', async () => {
        const res = await request(api).get('/dogs')
        expect(res.body).toHaveLength(3)
    });

    it('should retrive a dogs based on id', async () => {
    });


    it('should create a new dog ', async () => {

    });

    it('should delete a dog', async () => {

    }); 
})