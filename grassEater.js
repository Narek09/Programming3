// դեղին գույն- խոտ ուտող
let Parent = require('./Parent')
module.exports = class GrassEater extends Parent{
   constructor(x,y){
       super(x,y)
       this.energy = 20
   }
    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    eat(){
        let found = this.chooseCell(1);
        let oneCell = this.random(found);
        if(oneCell) {
            this.energy += 6;
            let newX = oneCell[0];
            let newY = oneCell[1];
            for(let i in grassArr){
                if(newX === grassArr[i].x && newY === grassArr[i].y){
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y =newY;
            if(this.energy > 20){
                this.mul();
            }
        }  
        else{
            this.move();
        }
    }
    move(){
        let found = this.chooseCell(0);
        let oneCell = this.random(found);
        if(oneCell){
            let newX = oneCell[0];
            let newY = oneCell[1];
            this.energy--;
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            if(this.energy <= 0){
                this.die()
            }
        }
        else{
            this.energy--;
            if(this.energy <= 0){
                this.die()
            }
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(let i in grassEaterArr){
            if(grassEaterArr[i].x === this.x && grassEaterArr[i].y === this.y){
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }

    mul(){
        let found = this.chooseCell(0);
        let oneCell = this.random(found);
        if(oneCell){
            let x = oneCell[0];
            let y = oneCell[1];
            matrix[y][x] = 2;
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);
            this.energy = 20;
        }
    }

}