let coordY = 0;
let coordX = 0;

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

const body = document.getElementsByTagName('body');

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