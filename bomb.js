let Parent = require('./parent')

module.exports = class Bomb extends Parent {
    constructor(x, y) {
        super(x, y)
        this.energy = 10
    }
    explode() {
        
        if (this.energy < 0){
            console.log(this.energy)
           
            // chooseCell()
            for (let i in this.directions) {
                let newX = this.directions[i][0];
                let newY = this.directions[i][1];
                if (newX >= 0 && newY >= 0 && newX < matrix[0].length && newY < matrix.length) {
                    if (matrix[newY][newX] == 1) {
                        matrix[newY][newX] = 0;
                        for (let i in grassArr) {
                            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 2) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0;
                        for (let i in grassEaterArr) {
                            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                                grassEaterArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 3) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0;
                        for (let i in allEaterArr) {
                            if (newX == allEaterArr[i].x && newY == allEaterArr[i].y) {
                                allEaterArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 4) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0;
                        for (let i in allGrassEaterArr) {
                            if (newX == allGrassEaterArr[i].x && newY == allGrassEaterArr[i].y) {
                                allGrassEaterArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 5) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0;
                        for (let i in amenakerArr) {
                            if (newX == amenakerArr[i].x && newY == amenakerArr[i].y) {
                                amenakerArr.splice(i, 1);
                                break;
                            }
                        }
                    }

                }

            }
            this.die()
        }
        else {
            this.wait();
        } 
    }
    die() {
        function randomm(min, max){
            let result = Math.floor(Math.random() * (min+max) - min +1)
            return result
         }
         let x = 50
         let y = 50
        let newX = randomm(0,x-1)
        let newY = randomm(0,y-1)
        let bomb = new Bomb(newX, newY)
        bombArr.push(bomb)
        console.log()
        matrix[this.y][this.x] = 0;
        for (let i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
                break;
            }
        }
    }
    wait() {
        this.energy--;
    }
}