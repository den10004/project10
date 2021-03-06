import {$formFight} from './main.js'
import {getRandom} from './utils.js'
import {HIT} from './variables.js'

export const playerAttack = () => {
    const attack = {}
    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value])
            attack.hit = item.value
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value
        }
        item.checked = false;
    }
    return attack
}