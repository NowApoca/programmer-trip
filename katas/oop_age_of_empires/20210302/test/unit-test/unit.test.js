const expect = require('expect')
const MeleeUnit = require('../../factories/MeleeUnit')
const Stats = require('../../factories/Stats')

describe(' Unit creation ', () => {
    it('Create unit', () => {
        const stats = Stats.create()
        stats.init({hp: 15, armor: 2, dp: 3})
        const melee = MeleeUnit.create()
        melee.init()
    })
})