let coordY = 0;
let coordX = 0;

let partialX = 0;
let partialY = 0;

const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

const body = document.getElementsByTagName('body');

const debouncedScroll = debounce(scrollNavigation, 300, true);

// as event not added in html file 
scrollNavigationEvent();

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
    partialX = pageWidth/20;
}

function suggestLeft() {
    partialX = -pageWidth/20;
}

function suggestDown() {
    partialY = pageHeight/15;
}

function suggestUp() {
    partialY = -pageHeight/15;
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

    setPartialTitles();
}

function setPartialTitles() {
    const pageNumber = getPageNumber();
    console.log(pageNumber," :page number");
    for(let i = 1; i <= 4; i++) {
        const titles = document.querySelectorAll(`.page-${i}-title`);
        console.log(titles, ": titles");
        if (!titles) continue;
        for(let j = 0; j < titles.length; j++) {
            console.log(i, ": current page number");
            if (i == pageNumber) {
                titles[j].style.display = 'none';
            } else {
                setTimeout(() => {
                    titles[j].style.display = 'block';
                }, 1000);
            }
        }
    }
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
    return currentY;
}

function getCoordX(util) {
    const currentX = util((window.scrollX)/pageWidth);
    return currentX;
}

function getPageNumber() {
    return coordY*2+coordX+1;
}

function scrollNavigationEvent() {
    body[0].addEventListener('wheel', debouncedScroll);
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function scrollNavigation(event) {
    if (event.deltaY < 0) {
        // scrolling up
        onNavigation('up');
    } else if (event.deltaY > 0) {
        // scrolling down
        onNavigation('down');
    } else if (event.deltaX < 0) {
        // scrolling left
        onNavigation('left');
    } else if (event.deltaX > 0) {
        // scrolling right
        onNavigation('right');
    }
}
