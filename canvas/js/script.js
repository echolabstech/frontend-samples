var canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    let colors = ["orange", "red", "blue", "brown", "yellow", "gray"];
    let x = 75;
    let y = 75;
    let radius = 75;
    let radians = (Math.PI / 180);
    let startangle = radians * 0;
    let endangle = radians * 360;
    let anticlockwise = false;
    let icon = 'img/phone-charger.png';

    drawArc(ctx, x, y, radius, startangle, endangle, anticlockwise);
    ctx.save();
    ctx.translate(x, y);

    for (let index = 0; index < colors.length; index++) {
        startangle = radians + index;
        endangle = radians + index + 1;
        drawPieSlice(ctx, radius, startangle, endangle, anticlockwise, colors[index]);
        drawText(ctx, (radius / 5), -5, endangle);
        drawIcon(ctx, icon,(radius / 2), (radius / 2), 15, 15, startangle);
    }

    ctx.restore();
}

function drawIcon(ctx,src,dx,dy,dh,dw,rotation) {
    let img = new Image();
    img.addEventListener("load", function(event) {  
        ctx.save();

        //position icon
        ctx.translate(75, 75);
        ctx.rotate(rotation);

        ctx.save();

        //lineup with text
        ctx.translate(dx, dy);
        ctx.rotate((Math.PI / 180) * 35);
        ctx.drawImage(img, 7, -25, dh, dw);

        ctx.restore();

        ctx.restore();
    }, false);
    img.src = src;
}

function drawPieSlice(ctx,radius,startangle,endangle,anticlockwise,color) {    
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, radius, startangle, endangle, anticlockwise)
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawText(ctx,x,y,rotation) {
    ctx.fillStyle = "black";
    ctx.font = 'normal Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'Alphabetic';
    let radians = (Math.PI / 180);

    ctx.save();

    ctx.rotate(rotation);

    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(radians * -25);
    ctx.fillText("Hello", 2.5, 0);

    ctx.restore();
    
    ctx.restore();
}

function drawArc(ctx,x,y,radius,startangle,endangle,anticlockwise,fillstyle) {
    ctx.fillStyle = fillstyle;
    ctx.beginPath();
    ctx.arc(x, y, radius, startangle, endangle, anticlockwise);
    ctx.stroke();
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