var pixelCount = 64;
var minPxl = 10;
var maxPxl = 100;
var gridCount = pixelCount * pixelCount;
let height = window.innerHeight;
let width = window.innerWidth;
let containerSize;
if (height >= width) containerSize = width - 30;
else containerSize = height - 100;
var pixelSize = Math.round(containerSize / pixelCount) - 2;
containerSize = pixelCount * (pixelSize + 2);
console.log(pixelSize);
console.log(containerSize + "px");
console.log(screen.availHeight);

var container = document.querySelector('#gridContainer');
container.setAttribute('style', `width: ${containerSize}px`);
container.addEventListener('mouseover', hovered)
makePixels();

function makePixels () { 
    for (let i = 0; i < gridCount; i++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('style', `width: ${pixelSize}px; height: ${pixelSize}px`)
        pixel.id = i;
        pixel.classList.add('pixel');
        pixel.addEventListener('touchstart', hovered);
        pixel.addEventListener('touchmove', hovered);
        pixel.addEventListener('touchend', hovered);
        container.appendChild(pixel);
        
    }
}

function hovered(e) {
    e.target.style.backgroundColor = "black";
}

function touched(e) {
    e.style.backgroundColor = "black";
}

function reset () {
    pixelCount = Math.round(prompt('Enter resolution (10 - 100)'));
    if (pixelCount < minPxl || pixelCount > maxPxl || isNaN(pixelCount)) {
        reset();
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    gridCount = pixelCount * pixelCount;

    pixelSize = Math.round(containerSize / pixelCount) - 2;
    containerSize = pixelCount * (pixelSize + 2);
    container.setAttribute('style', `width: ${containerSize}px`);
    makePixels()
}