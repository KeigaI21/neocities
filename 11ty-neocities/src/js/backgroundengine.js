// UNUSED

const canvas = document.getElementById("background-canvas")
const ctx = canvas.getContext("2d");

var filter = document.querySelector("feTurbulence");
// Fit to screen
var screenW = window.innerWidth;
var screenH = window.innerHeight;
canvas.width = screenW;
canvas.height = screenH;

// ADJUSTMENT VARIABLES

// Sine Step: How frequently should sine wave draw a point in pixels in x-dir 
const sineStep = 3;
// Grid Size: How many intervals across whole screen
// var gridSizeX = 30;
// var gridSizeZ = 10;
// Location of horizon
// const horizon = screenH * 0.6;
// Perspective scaling for z values
// var zLogScale = Math.pow(screenH + 1, 1/(screenH-horizon));

// OTHER VARIABLES
// Stores height info in coordinate array
// var heightMap = Array.from({ length: gridSizeX }, () => Array(gridSizeZ).fill(0));

// RENDER
let start;
function drawStep(timestamp) {
    // Clear frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (start === undefined) {
        start = timestamp;
    }
    // Draw sine wave, phase increasing over time
    drawSine(0, screenH*0.5, screenW, 130, pixelFreq(200), timestamp/100);

    // Update turbulence
/*
    freqX = 0.005 + 0.001 * Math.cos(timestamp/1000);
    freqY = 0.005 + 0.001 * Math.sin(timestamp/1000);
    freq = freqX.toString() + ' ' + freqY.toString();
    filter.setAttributeNS(null, 'baseFrequency', freq);
*/
    requestAnimationFrame(drawStep);
}
requestAnimationFrame(drawStep);

// drawGrid(gridSizeX, gridSizeZ, heightMap);

// EVENTS

// Update canvas on window resize
window.onresize = function() {
    screenW = window.innerWidth;
    screenH = window.innerHeight;
}

// AUXILLARY FUNCTIONS

// since grid size may change while code is running, it is passed in
/*
function drawGrid(gx, gz, zmap) {
    // Grid should span from edge to edge, so x lines means x-1 divisions
    const deltaX = Math.floor(screenW/(gx-1));
    const deltaZ = Math.floor(screenH/(gz-1));
    // For every x-coordinate on the grid, draw a vertical line through all the z-coordinated
    for (let i = 0; i < gx; i++) {
        xCoord = i*deltaX;
        // Bottom of screen
        ctx.moveTo(xCoord, screenH);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        for(let j = 0; j < gz; j++) {
            zmap[i][j] = 1;
            ctx.lineTo(xCoord, screenH - (Math.log(j*deltaZ + 1) / Math.log(zLogScale)));
        }
        // Top of screen
        ctx.lineTo(xCoord, horizon);
        ctx.stroke();
    }
    for (let j = 0; j < gz; j++) {
        zCoord = screenH - (Math.log(j*deltaZ + 1) / Math.log(zLogScale));
        ctx.moveTo(0, zCoord);
        ctx.beginPath();
        ctx.strokeStyle = "black";
        for(let i = 0; i < gx; i++) {
            zmap[i][j] = 2;
            ctx.lineTo(i*deltaX, zCoord);
        }
        ctx.lineTo(screenW, zCoord);
        ctx.stroke();
    }
    console.log(zmap);
}
*/
// freq in radians/x, phase in radians
function drawSine(startX, startY, endX, amp, freq, phase) {

    ctx.moveTo(startX, startY + amp*Math.sin(freq*newX + phase));
    ctx.beginPath();
    ctx.strokeStyle = "black";
    // t is number of steps, not x value. t*sineStep is x-increment
    for (let t = 0; t < Math.round((endX-startX)/sineStep); t++) {
        var newX = startX + t*sineStep;
        ctx.lineTo(newX, startY + Math.floor(amp*Math.sin(freq*newX + phase)));
    }
    ctx.lineTo(endX, startY + amp*Math.sin(freq*endX + phase));
    ctx.stroke();
}
// Converts pixel length to sine wave frequency
function pixelFreq(pixels) {
    return (2*Math.PI)/pixels;
}
