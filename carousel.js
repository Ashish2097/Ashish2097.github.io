let coordY = 0;
let coordX = 0;

let partialX = 0;
let partialY = 0;

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

const body = document.getElementsByTagName('body');

function onNavHover(where) {
    switch(where) {
        case 'down': {
            suggestDown();
            break;
        }
        case 'up': {
            suggestUp();
            break;
        }
        case 'left': {
            suggestLeft();
            break;
        }
        case 'right': {
            suggestRight();
            break;
        }
        case 'reset': {
            partialX = 0;
            partialY = 0;
            break;
        }
    }
    window.scrollTo(coordX*pageWidth + partialX, coordY*pageHeight + partialY);
}

function suggestRight() {
    partialX = pageWidth/70;
}

function suggestLeft() {
    partialX = -pageWidth/10;
}

function suggestDown() {
    partialY = pageHeight/10;
}

function suggestUp() {
    partialY = -pageHeight/10;
}

function onNavigation(where) {
    switch(where) {
        case 'down': {
            goDown();
            break;
        }
        case 'up': {
            goUp();
            break;
        }
        case 'left': {
            goLeft();
            break;
        }
        case 'right': {
            goRight();
            break;
        }
    }
    window.scrollTo(coordX*pageWidth, coordY*pageHeight);
}

function goLeft() {
    coordX = getCoordX(Math.ceil) - 1;
}

function goRight() {
    coordX = getCoordX(Math.floor) + 1;
}

function goDown() {
    coordY = getCoordY(Math.floor) + 1;
}

function goUp() {
    coordY = getCoordY(Math.ceil) - 1;
}

function getCoordY(util) {
    const currentY = util((window.scrollY)/pageHeight);
    console.log(currentY, ": currentY");
    return currentY;
}

function getCoordX(util) {
    const currentX = util((window.scrollX)/pageWidth);
    console.log(currentX, ": currentX");
    return currentX;
}