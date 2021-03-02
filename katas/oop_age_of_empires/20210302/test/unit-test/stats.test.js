const expect = require('expect')
const MeleeUnit = require('../../factories/MeleeUnit')
const Stats = require('../../factories/Stats')

const statsTest = {hp: 15, armor: 2, dp: 3}

describe(' Unit creation ', () => {
    it('Create stats', () => {
        const stats = Stats.create()
        stats.init(statsTest)
        expect(stats.hp).toEqual(statsTest.hp)
        expect(stats.armor).toEqual(statsTest.armor)
        expect(stats.dp).toEqual(statsTest.dp)
        expect(stats.scope).toEqual(1)
    })
    it('Recive an atack to the unit stats', () => {
        const stats = Stats.create()
        stats.init(statsTest)
        stats.receive_an_atack({dp: 5, penetration: 2})
    })
})