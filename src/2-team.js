// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }
}
const player1 = new Player("LeBron James", "Forward", 23);
const player2 = new Player("Stephen Curry", "Guard", 30);
const player3 = new Player("Kevin Durant", "Forward", 35);

console.log(player1); // Player { name: "LeBron James", position: "Forward", jerseyNumber: 23 }
console.log(player2); // Player { name: "Stephen Curry", position: "Guard", jerseyNumber: 30 }
console.log(player3); // Player { name: "Kevin Durant", position: "Forward", jerseyNumber: 35 }

class Team {
    #starters;
    #bench;
    constructor(name) {
        this.name = name;
        this.#starters = [];
        this.#bench = [];
    }
    getStarters() {
        return this.#starters;
    }
    getBench() {
        return this.#bench;
    }
    addBenchPlayer(player) {
        this.#bench.push(player);
    }
    getPlayerCount() {
        return this.#starters.length + this.#bench.length
    }
    moveToBench(name) {
        const index = this.#starters.findIndex(player => player.name === name)
        if (index !== -1) {
            this.#starter;
            return true;
        }
        return false;
    }
    moveToStarters(name) {
        if (this.#bench.find((el) => el === name)) {

        }
    }
}

module.exports = { Player, Team };

