let Parent = require('./Parent')

module.exports = class Grass extends Parent {
    // բազմանալու մեթոդը
    mul() {
        this.multiply++;
        let found = this.chooseCell(0);
        let emptyCell = this.random(found);
        if (emptyCell && this.multiply === 2) {
            let x = emptyCell[0];
            let y = emptyCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);
            this.multiply = 0;
        }
    }

}