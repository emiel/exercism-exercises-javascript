export const abilityModifier = (n) => {
  if (n < 3) {
    throw new Error("Ability scores must be at least 3");
  } else if (n > 18) {
    throw new Error("Ability scores can be at most 18");
  } else {
    return Math.floor((n - 10) / 2);
  }
};

export class Character {
  static rollAbility() {
    const roll = () => Math.floor(Math.random() * 6);
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(roll());
    }
    return rolls
      .sort()
      .slice(1)
      .reduce((acc, n) => acc + n);
  }

  constructor() {
    this._strength = this.constructor.rollAbility();
    this._dexterity = this.constructor.rollAbility();
    this._constitution = this.constructor.rollAbility();
    this._intelligence = this.constructor.rollAbility();
    this._wisdom = this.constructor.rollAbility();
    this._charisma = this.constructor.rollAbility();
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
