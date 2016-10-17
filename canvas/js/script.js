var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    let colors = ["orange", "red", "blue"];
    let x = 75;
    let y = 75;

    var startangle, endangle = 0;

    drawArc(ctx);
    ctx.translate(x, y);

    for (let index = 0; index < colors.length; index++) {
        startangle = (Math.PI / 180) + index;
        endangle = (Math.PI / 180) + index + 1;
        drawPieSlice(ctx, index, colors[index], startangle, endangle);
        drawText(ctx, index);
    }
}

function drawPieSlice(ctx,offset,color, startangle, endangle) {
    let radius = 50;
    console.log('startangle:'+startangle+' - endangle:'+endangle)
    let anticlockwise = false;
    
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, radius, startangle, endangle, anticlockwise)
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawText(ctx,index) {
    let rotation = (Math.PI / 180) + index + 1;

    ctx.save();
    ctx.fillStyle = "black";
    ctx.rotate(rotation);
    ctx.font = 'normal Arial';
    ctx.fillText("Hello", 0, 0);
    ctx.restore();
}

function drawArc(ctx) {
    let x = 75;
    let y = 75;
    let radius = 50;
    let startangle = (Math.PI / 180) * 0;
    let endangle = (Math.PI / 180) * 360;
    let anticlockwise = false;
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, radius, startangle, endangle, anticlockwise);
    ctx.stroke();
}

function drawRandomThing(ctx) {
    ctx.save();
    ctx.fillStyle = '#B5121B';
    ctx.translate(50, 25);
    ctx.rotate((Math.PI / 180) * 90);
    ctx.beginPath();
    ctx.arc(5, 5, 100, 5.5, 6);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.save();
    ctx.fillText("Hello world", 20, 20);
    ctx.restore();
}

function drawSmiley(ctx) {
    ctx.beginPath();
    ctx.arc(175,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(210,75);
    ctx.arc(175,75,35,0,Math.PI,false);  // Mouth (clockwise)
    ctx.moveTo(165,65);
    ctx.arc(160,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(195,65);
    ctx.arc(190,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
}

function drawTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(100,75);               
    ctx.lineTo(100,25);               
    ctx.fill();
}

function drawSquare(ctx) {
    // x, y, height, width
    let size = 100;
    let stroke = 10;
    ctx.fillRect(0,0,size,size);
    ctx.clearRect(stroke,stroke,80,80);
}