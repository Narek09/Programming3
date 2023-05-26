let socket = io();
let side = 50;
let initialMatrix = [];

function setup() {
    setTimeout(function () {
        createCanvas(initialMatrix[0].length * side, initialMatrix.length * side);
    }, 1000)

    background('#acacac');


}
let color = "green"
function guyn(){
    color = "white"
}
function da(){
    socket.emit('si',"winter" )
}
function qanak(data){
    document.getElementById("qan").innerHTML = data.gras
    document.getElementById("qan2").innerHTML = data.ge
}
socket.on("qanak", function(data){
        qanak(data)
    })
function jnjel(){

}
document.getElementById("jnjel").addEventListener("click", jnjel)
document.getElementById("dandagh").addEventListener("click", da)
document.getElementById("dzmer").addEventListener("click", guyn)
function drawMatrix(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(color);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 3) {
                fill('red');
            }
            else if (matrix[y][x] == 4) {
                fill('purple')
            }
            else if (matrix[y][x] == 5) {
                fill('blue')
            }
            else if (matrix[y][x] == 6) {
                fill('black')
            }
            else {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on('matrix', function (matrix) {
    drawMatrix(matrix)
})

socket.on('initial', function (matrix) {
    initialMatrix = matrix
})