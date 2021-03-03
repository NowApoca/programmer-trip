'use strict';

const expect = require('expect')
const MeleeUnit = require('../../factories/MeleeUnit')
const Stats = require('../../factories/Stats')

const stats_test = {hp: 45, armor: 2, dp: 3}

describe(' Unit creation ', () => {
    it('Create stats', () => {
        const stats = Stats.create()
        stats.init(stats_test)
        expect(stats.get_hp()).toEqual(stats_test.hp)
        expect(stats.get_armor()).toEqual(stats_test.armor)
        expect(stats.get_dp()).toEqual(stats_test.dp)
        expect(stats.get_scope()).toEqual(1)
        expect(stats.get_penetration()).toEqual(0)
    })
    it('Recive an atack to the unit stats', () => {
        const stats = Stats.create()
        stats.init(stats_test)
        const atacker_stats = {
            dp: 10,
            penetration: 2,
        }
        const stats_atacker = Stats.create()
        stats_atacker.init(atacker_stats)
        let stats_after_defend = stats.receive_atack(stats_atacker)
        expect(stats_after_defend.get_current_hp()).toEqual(stats.get_hp() + stats.get_armor() - stats_atacker.get_dp() - stats_atacker.get_penetration())
    })
    it('Recive an atack to the unit and kill the defended stats', () => {
        const stats = Stats.create()
        stats.init(stats_test)
        const atacker_stats = {
            dp: 100,
            penetration: 2,
        }
        const stats_atacker = Stats.create()
        stats_atacker.init(atacker_stats)
        let stats_after_defend = stats.receive_atack(stats_atacker)
        expect(stats_after_defend.get_current_hp()).toEqual(0)
        expect(stats_after_defend.is_dead()).toEqual(true)
    })
    it('Recive an atack to the unit and heal after atack', () => {
        const stats = Stats.create()
        stats.init(stats_test)
        const atacker_stats = {
            dp: 10,
            penetration: 2,
        }
        const stats_atacker = Stats.create()
        stats_atacker.init(atacker_stats)
        stats.receive_atack(stats_atacker)
        const healed_points = 10
        let stats_after_heal = stats.heal(healed_points)
        expect(stats_after_heal.get_current_hp()).toEqual(stats.get_hp() + stats.get_armor() - 
            stats_atacker.get_dp() - stats_atacker.get_penetration() + healed_points)
    })
})


describe(' Throw stats cases ', () => {
    it('Create stats stats should not be extensiblle', () => {
        const stats = Stats.create()
        stats.init(stats_test)
        expect(() => stats.armor = 5).toThrowError('Cannot add property armor, object is not extensible')
    })
})