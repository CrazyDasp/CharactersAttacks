export class Character {
    constructor(defaultAttack) {
        this.defaultAttack = defaultAttack;
        this.distance = 1;
        this._stoned = false;
    }

    get attack() {
        if (this.distance < 1) {
            throw new Error("Distance cant be lower than 1")
        }

        let reduceAttack = this.defaultAttack * (1 - (this.distance - 1) * 0.1)

        if (this._stoned) {
            reduceAttack -= Math.log2(this.distance) * 5
        }

        return Math.max(0, Math.floor(reduceAttack))
    }

    set attack(value) {
        this.defaultAttack = value
    }

    get stoned() {
        return this._stoned
    }

    set stoned(value) {
        this._stoned = value
    }
}

export class Magician extends Character {
    constructor(defaultAttack) {
        super(defaultAttack)
    }
}

export class Daemon extends Character {
    constructor(defaultAttack) {
        super(defaultAttack)
    }
}