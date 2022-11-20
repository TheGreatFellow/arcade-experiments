const CONTRACT_ADDRESS = '0x8f7e857717B1E1F5f43a4c96eeCD40B66a71e1E1'

const transformCharacterData = (characterData) => {
    return {
        characterName: characterData.characterName,
        imageURL: characterData.imageURL,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber(),
        origin: characterData.origin,
        specialAttack: characterData.specialAttack,
    }
}

export { CONTRACT_ADDRESS, transformCharacterData }
