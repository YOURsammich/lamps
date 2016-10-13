var canvas = document.getElementById('main'),
    ctx = canvas.getContext('2d');


function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function drawTri(X, Y, color) {
    X *= 5;
    Y *= 10;
    
    ctx.beginPath();
    if (X % 10 === 0) {
        ctx.moveTo(X - 5, Y + 10);
        ctx.lineTo(X, Y);
        ctx.lineTo(X + 5, Y + 10);
    } else {
        ctx.moveTo(X, Y + 10);
        ctx.lineTo(X - 5, Y);
        ctx.lineTo(X + 5, Y);
    }
    
    ctx.closePath();
    ctx.fillStyle = color || '#red';
    ctx.fill();
}

function getCoords(width, height, angle, posX, posY) {
  var x = width + width * Math.cos(angle * Math.PI / 180);
  var y = height + height * Math.sin(angle * Math.PI / 180);
  return {
    x : x + posX,
    y : y + posY
  };
}

function drawCircle(X, Y, color) {
    var theRadius = 5;
    
    setInterval(function () {
        
        if (theRadius > -50) {
            for(var q = 0; q < 360; q++) {
                var coords = getCoords(theRadius, theRadius, q, X, Y);
                drawTri(Math.round(coords.x), Math.round(coords.y / 2), color);
            }
            theRadius--;
            X++;
            Y++;
        } else {
            clearInterval(this);
        }
        
    }, 100);
    
    
}

var X = 0,
    Y = 0,
    raidus = 25,
    angle = 0;

document.body.addEventListener('mousemove', function (e) {
    X = e.clientX / 5;
    Y = e.clientY / 5;
});

document.body.addEventListener('click', function (e) {
    drawCircle(X, Y, '#'+Math.floor(Math.random()*16777215).toString(16));
});

init();