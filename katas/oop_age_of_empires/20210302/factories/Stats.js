
const model = () => {

    return {
        armor: null,
        hp: null,
        current_hp: null,
        dp: null,
        scope: null,
        init({hp, armor, dp, scope = 1}){
            this.armor = armor || 0
            this.hp = hp || 1
            this.current_hp = hp || 1
            this.dp = dp || 0
            this.scope = scope || 1
        },
    }
}

const Stats = () => {

    const create = () => {
        return Object.assign({}, model())
    }

    return {
        create,
    }
}

module.exports = Stats()