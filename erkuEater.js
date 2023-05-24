// մանուշակագույն- կարմիրին և դեղինին ուտող
let Parent = require('./Parent')
module.exports = class AllGrassEater extends Parent {
    constructor(x,y){
        super(x,y)
        this.energy = 15
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x,     this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x,     this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character, character2) {
        let found = [];
        this.getNewCoordinates();
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] === character || matrix[y][x] === character2) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    eat() {
        let found = this.chooseCell(2, 3);
        let oneCell = this.random(found);
        if (oneCell) {
            this.energy += 5;
            let newX = oneCell[0];
            let newY = oneCell[1];
            if (matrix[newY][newX] === 2) {
                for (let i in grassArr) {
                    if (newX === grassEaterArr[i].x && newY === grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] === 3) {
                for (let i in grassArr) {
                    if (newX === allEaterArr[i].x && newY === allEaterArr[i].y) {
                        allEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy > 14) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }
    move() {
        let found = this.chooseCell(0);
        let oneCell = this.random(found);
        if (oneCell) {
            let newX = oneCell[0];
            let newY = oneCell[1];
            this.energy--;
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if (this.energy <= 0) {
                this.die()
            }
        }
        else {
            this.energy--;
            if (this.energy <= 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in allGrassEaterArr) {
            if (allGrassEaterArr[i].x === this.x && allGrassEaterArr[i].y === this.y) {
                allGrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        let found = this.chooseCell(0);
        let oneCell = this.random(found);
        if (oneCell){
            let x = oneCell[0];
            let y = oneCell[1];
            matrix[y][x] = 4;
            let allgrassEater = new AllGrassEater (x, y);
            allGrassEaterArr.push(allgrassEater);
            this.energy = 15;
        }
    }
    
}

