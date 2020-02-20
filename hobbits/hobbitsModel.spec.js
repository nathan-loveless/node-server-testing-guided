//test.todo('not yet implemented');

const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert', () => {
        it('should insert the provided hobbits into the db', async () => {
            await Hobbits.insert({name:'gaffer'});
            await Hobbits.insert({name:'Sam'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        })

        it('should return the inserted hobbit', async () => {
            let hobbit = await Hobbits.insert({name: "gaffer"});
            expect(hobbit.name).toBe('gaffer');

             hobbit = await Hobbits.insert({name: "sam"});
            expect(hobbit.name).toBe('sam');
        })
    })
})

beforeEach(async () => {
    await db('hobbits').truncate();
})