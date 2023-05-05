let matrix = [];
var side = 20;
let grassArr = [];
let grassEaterArr = [];
let allEaterArr = [];
let allGrassEaterArr = [];
let amenakerArr = [];

function setup() {
    matrix = generateMatrix(50, 50, 20, 60, 10, 10, 11);
    frameRate(5);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if(matrix[y][x] === 2){
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater); 
            }
            else if(matrix[y][x] === 3){
                let allEater = new AllEater(x, y);
                allEaterArr.push(allEater); 
            }
            else if(matrix[y][x] === 4){
                let allgrassEater = new AllGrassEater(x, y);
                allGrassEaterArr.push(allgrassEater); 
            }
            else if(matrix[y][x] === 5){
                let amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker); 
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if(matrix[y][x] == 2){
                fill('yellow');
            }   
            else if(matrix[y][x] == 3){
                fill('red');
            }  
            else if(matrix[y][x] == 4){
                fill('purple')
            }
            else if(matrix[y][x] == 5){
                fill('blue')
            }
            else {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }
    for(let i = 0; i < grassEaterArr.length; i++){
        grassEaterArr[i].eat()
    }
    for(let i = 0; i < allEaterArr.length; i++){
        allEaterArr[i].eat()
    }
    for(let i = 0; i < allGrassEaterArr.length; i++){
        allGrassEaterArr[i].eat()
    }
    for(let i = 0; i < amenakerArr.length; i++){
        amenakerArr[i].eat()
    }
}
function generateMatrix(x, y, grassCount, grassEaterCount, allEaterCount, allGrassEater, amenakerCount) {
    let matrix = [];
    for(let i = 0; i < x; i++){
        matrix.push([]);
        for(let j = 0; j < y; j++){
            matrix[i][j] = 0;
        }
    }
    for(let i = 0; i < grassCount; i++){
        let newX = Math.floor(random(x))
        let newY = Math.floor(random(y))
        if(matrix[newY][newX] == 0){
            matrix[newY][newX] = 1;
        }
    }
    for(let i = 0; i < grassEaterCount; i++){
        let newX = Math.floor(random(x))
        let newY = Math.floor(random(y))
        if(matrix[newY][newX] == 0){
            matrix[newY][newX] = 2;
        }
    }
    for(let i = 0; i < allEaterCount; i++){
        let newX = Math.floor(random(x))
        let newY = Math.floor(random(y))
        if(matrix[newY][newX] == 0){
            matrix[newY][newX] = 3;
        }
    }
    for(let i = 0; i < allGrassEater; i++){
        let newX = Math.floor(random(x))
        let newY = Math.floor(random(y))
        if(matrix[newY][newX] == 0){
            matrix[newY][newX] = 4;
        }
    }
    for(let i = 0; i < amenakerCount; i++){
        let newX = Math.floor(random(x))
        let newY = Math.floor(random(y))
        if(matrix[newY][newX] == 0){
            matrix[newY][newX] = 5;
        }
    }
    return matrix;
}
