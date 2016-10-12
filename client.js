var canvas = document.getElementById('main'),
    ctx = canvas.getContext('2d');


function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function drawTri(X, Y) {
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
    ctx.fillStyle = 'red';
    ctx.fill();
}

function drawLine(X, Y) {
    X *= 5;
    Y *= 5;
    
    ctx.beginPath();
    ctx.quadraticCurveTo(X+((Math.random()*100)-50), Y+((Math.random()*100)-50), X+((Math.random()*100)-50), Y+((Math.random()*100)-50));
    ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    ctx.closePath();
    ctx.stroke();
}

function getCoords(width, height, angle, posX, posY) {
  var x = width + width * Math.cos(angle * Math.PI / 80);
  var y = height + height * Math.sin(angle * Math.PI / 180);
  return {
    x : x + posX,
    y : y + posY
  };
}

function drawCircle(X, Y) {
    var angle,
        radius = 25,
        cLeft,
        cRight;
    
    for(angle = 0; angle <= 720; angle++) {
        var coords = getCoords(25, 25/2, angle, X, Y);
        //drawLine(Math.round(coords.x), Math.round(coords.x) + 10, Math.round(coords.y));
        drawTri(Math.round(coords.x), Math.round(coords.y));
    }
}

var X = 0,
    Y = 0,
    raidus = 25,
    angle = 0;

document.body.addEventListener('mousemove', function (e) {
    X = e.clientX / 5;
    Y = e.clientY / 10;
})

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle++;
    for(var q = angle; q < angle + 200; q++) {
        var coords = getCoords(raidus, raidus, q, X, Y);
        drawLine(Math.round(coords.x), Math.round(coords.y));
    }
    //drawCircle(X, Y);
}, 10);

init();