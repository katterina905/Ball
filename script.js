document.getElementById("drawingCanvas").addEventListener( "mousedown", addBall );
var balls = [];

function addBall() {
    var ball = new Ball();
    balls.push(ball);
}

function clearBalls() {
    balls = [];
}

function Ball(x, y, dx, dy, radius) {
    this.x = 50;
    this.y = 50;
    this.dx = 1;
    this.dy = 1;
    this.radius = 30;
}

window.onload = function() {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    setTimeout("drawFrame()", 20);
};

function drawFrame() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();


    for(var i=0; i<balls.length; i++) {
        var ball = balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;

        if ((ball.y) < canvas.height) ball.dy += 0.22;

        ball.dx = ball.dx * 0.998;

        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
            ball.dx = -ball.dx;
        }

        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) {
            ball.dy = -ball.dy*0.96;
        }

        context.beginPath();
        context.arc(ball.x, ball.y,ball.radius, 0, Math.PI*2, false);
        context.fillStyle = "white";

        context.shadowColor = '#01324f';
        context.shadowBlur = 20;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;

        context.fill();


    }

    setTimeout("drawFrame()", 20);
}
