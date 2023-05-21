var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);
let GrassEater = require('./grassEater')
let AllEater = require('./allEater')
let AllGrassEater = require('./erkuEater')
let Grass = require ('./grass')
let Amenaker = require('./Amenaker')

// splice arr

 matrix = [];
 grassArr = [];
 grassEaterArr = [];
 allEaterArr = [];
 allGrassEaterArr = [];
 amenakerArr = [];
  function randomm(min, max){
   let result = Math.floor(Math.random() * (min+max) - min +1)
   return result

}
function createCanvas() {
   function generateMatrix(x, y, grassCount, grassEaterCount, allEaterCount, allGrassEater, amenakerCount) {
      let matrix = [];
      for (let i = 0; i < x; i++) {
         matrix.push([]);
         for (let j = 0; j < y; j++) {
            matrix[i][j] = 0;
         }
      }
      for (let i = 0; i < grassCount; i++) {
         let newX = randomm(0,x)
         let newY = randomm(0,y)
         if (matrix[newY][newX] == 0) {
            matrix[newY][newX] = 1;
         }
      }
      for (let i = 0; i < grassEaterCount; i++) {
         let newX = randomm(0,x)
         let newY = randomm(0,y)
         if (matrix[newY][newX] == 0) {
            matrix[newY][newX] = 2;
         }
      }
      for (let i = 0; i < allEaterCount; i++) {
         let newX = randomm(0,x)
         let newY = randomm(0,y)
         if (matrix[newY][newX] == 0) {
            matrix[newY][newX] = 3;
         }
      }
      for (let i = 0; i < allGrassEater; i++) {
         let newX = randomm(0,x)
         let newY = randomm(0,y)
         if (matrix[newY][newX] == 0) {
            matrix[newY][newX] = 4;
         }
      }
      for (let i = 0; i < amenakerCount; i++) {
         let newX = randomm(0,x)
         let newY = randomm(0,y)
         if (matrix[newY][newX] == 0) {
            matrix[newY][newX] = 5;
         }
      }
      return matrix;
   }
   matrix = generateMatrix(50, 50, 10, 30, 10, 10, 20);

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] === 1) {
            let grass = new Grass(x, y);
            grassArr.push(grass);
         }
         else if (matrix[y][x] === 2) {
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);
         }
         else if (matrix[y][x] === 3) {
            let allEater = new AllEater(x, y);
            allEaterArr.push(allEater);
         }
         else if (matrix[y][x] === 4) {
            let allgrassEater = new AllGrassEater(x, y);
            allGrassEaterArr.push(allgrassEater);
         }
         else if (matrix[y][x] === 5) {
            let amenaker = new Amenaker(x, y);
            amenakerArr.push(amenaker);
         }
      }
   }
}


function playGame() {
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
  io.emit('matrix', matrix)
  return matrix
}


createCanvas();

setInterval(playGame, 1000);

io.on('connection', function(socket){
   socket.emit('matrix', matrix)
   socket.emit('initial', matrix)
})