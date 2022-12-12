import { Model as Man1 } from "./Man1";
import { Model as Man2 } from "./Man2";
import { Model as Man3 } from "./Man3";
import { Model as Woman } from "./Woman";

const CONTRACT_ADDRESS = "0x8f7e857717B1E1F5f43a4c96eeCD40B66a71e1E1";

const transformCharacterData = (characterData) => {
  return {
    characterName: characterData.characterName,
    imageURL: characterData.imageURL,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    origin: characterData.origin,
    specialAttack: characterData.specialAttack,
  };
};

const getAvatar = (id, isPlaying, props) => {
  switch (id) {
    case "1":
      return <Woman {...props} isPlaying={isPlaying} />;
    case "2":
      return <Man1 {...props} isPlaying={isPlaying} />;
    case "3":
      return <Man2 {...props} isPlaying={isPlaying} />;
    case "4":
      return <Man3 {...props} isPlaying={isPlaying} />;
    default:
      return null;
  }
};

export { CONTRACT_ADDRESS, transformCharacterData, getAvatar };
