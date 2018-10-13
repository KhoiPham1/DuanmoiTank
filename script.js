function Tank(x,y){
    this.x = x;
    this.y = y;
    this.setX = function (x) {
        this.x = x;
    };
    this.setY = function (y) {
        this.y = y;
    };
    this.render = function (canvas) {
        var context = canvas.getContext('2d');
        context.clearRect(0,0,500,500);
        context.beginPath();
        context.fillStyle = 'green';
        context.fillRect(this.x,this.y,20,20);
        context.closePath();
    };
    this.moveRight = function () {
        this.x += 10;
        if (this.x >=480) {
            this.x = 480;
        }
        this.render(canvas)
    };
    this.moveLeft = function () {
        this.x -= 10;
        this.render(canvas)
        if (this.x <=10){
            this.x = 10;
        }
        this.render(canvas)
    };
    this.moveDown = function () {
        this.y +=10;
        if (this.y >=480){
            this.y = 480;
        }
        this.render(canvas)
    }
    this.moveUp = function () {
        this.y -=10;
        if (this.y <=10){
            this.y = 10;
        }
        this.render(canvas)
    }
}
var canvas = document.getElementById("myCanvas");
var tank = new Tank(50,50);
tank.render(canvas);
function move(event) {
   switch (event.which) {
       case 37:
           tank.moveLeft();
           break;
       case 39:
           tank.moveRight();
           break;
       case 38:
           tank.moveUp();
           break;
       case 40:
           tank.moveDown();
           break;
   }
}
function Bom(x1, y1, radius, color) {
    this.x = x1;
    this.y = y1;
    this.radius = radius;
    this.color = color;
    this.setX = function (x) {
        this.x = x1
    };
    this.setY = function (y) {
        this.y = y1;
    };
    this.setRadius = function (radius) {
        this.radius = radius;
    };
    this.setColor = function (color) {
        this.color = color;
    };
    this.render = function (canvas) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 500, 500);
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    };
}
var x1 = 100;
var y1 = 200;
var radius = 50;
var color = 'red';
 sun = new Bom(x1, y1, radius, color);
sun.render(canvas);
function updateBom() {
    var x1 = document.getElementById('xPosition').value;
    var y1 = document.getElementById('yPosition').value;
    var radius = document.getElementById('radius').value;
    var color = document.getElementById('color').value;
    sun.setX(x1);
    sun.setY(y1);
    sun.setRadius(radius);
    sun.setColor(color);
    sun.render(canvas);
}

