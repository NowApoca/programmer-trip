'use strict';

const model = () => {

    let is_dead = false


    let armor = null;
    let hp = null;
    let current_hp = null;
    let dp = null;
    let scope = null;
    let penetration = null;

    const get_armor = () => armor;
    const get_hp = () => hp;
    const get_current_hp = () => current_hp;
    const get_dp = () => dp;
    const get_scope = () => scope;
    const get_penetration = () => penetration;

    const update_is_dead_attribute = () => {
        if(current_hp <= 0){
            current_hp = 0;
            is_dead = true
        }else{
            is_dead = false
        }
    }

    const update_current_hp_attribute = () => {
        if(current_hp > hp){
            current_hp = hp
        }
    }

    // PERHAPS IT IS BETTER HAVING GETTERS AND SETTERS. VARS CAN BE CHANGED IN THE ENTIRE PROGRAM. PERHAPS, WE SHOULD RETURN A FREEZE.

    let obj = {
        get_armor,
        get_hp,
        get_current_hp,
        get_dp,
        get_scope,
        get_penetration,

        init(stats){
            armor = stats.armor || 0
            hp = stats.hp || 1
            current_hp = stats.hp || 1
            dp = stats.dp || 0
            scope = stats.scope || 1
            penetration = stats.penetration || 0
            update_is_dead_attribute(this)
        },

        receive_atack(atacker_stats){
            current_hp -= atacker_stats.get_dp() + atacker_stats.get_penetration() - armor
            update_is_dead_attribute(this)
            return this
        },
        is_dead(){
            return is_dead
        },
        heal(hp){
            current_hp += hp
            update_current_hp_attribute(this)
            return this
        }
    }
    Object.freeze(obj)
    return obj 
}

const Stats = () => {

    const create = () => {
        return model()
    }

    return {
        create,
    }
}

module.exports = Stats()