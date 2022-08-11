class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.ceil((this.min + this.max) / 2);
        return this.mid;
    }

    lower() {
        this.max = this.mid;
        this.guess();
    }

    greater() {
        this.min = this.mid;
        this.guess();
    }
}

module.exports = GuessingGame;