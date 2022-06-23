const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

const warriorDamage = (warrior) => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1)) + warrior.strength;

const mageData = (mage) => {
    const mana = mage.mana;
    const turnStats = {
        manaSpent: 0,
        damage: 'Não possui mana suficiente',
    }
    if (mana > 15) {
        const mageDamage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence;
        turnStats.manaSpent = 15;
        turnStats.damage = mageDamage;
        return turnStats;
    }
    return turnStats;
};

const gameActions = {
    warriorTurn: (callback) => {
        const warriorDamage = callback(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (callback) => {
        const mageDamage = callback(mage);
        mage.damage = mageDamage.damage;
        mage.mana -= mageDamage.manaSpent;
        dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (callback) => {
        const dragonDamage = callback(dragon);
        dragon.damage = dragonDamage;
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
    },
    final: () => battleMembers,
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageData);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.final());