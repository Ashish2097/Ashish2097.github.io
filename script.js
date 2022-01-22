let positionX;
let positionY;

/**
 * factor by which cursors movement will affect content
 */
const translationWeight = 0.1;

const setCursorPosition = (event) => {
    positionX = event.clientX;
    positionY = event.clientY;

    setContentCoordinatesRandom();
}

function setContentCoordinates() {    
    const root = document.querySelector(':root');

    /**
     * coordinates with reference to screen's center
     */ 
    const referCenterX = positionX - window.innerWidth/2;
    const referCenterY = positionY - window.innerHeight/2;

    /**
     * actual distance by which content will move
     */
    const distToMoveX = referCenterX * translationWeight;
    const distToMoveY = referCenterY * translationWeight;

    root.style.setProperty('--position-x', -distToMoveX + "px");
    root.style.setProperty('--position-y', -distToMoveY + "px");
}

function setContentCoordinatesRandom() {
    const elems = document.querySelectorAll('.content-body-child');

    /**
     * coordinates with reference to screen's center
     */ 
    const referCenterX = positionX - window.innerWidth/2;
    const referCenterY = positionY - window.innerHeight/2;

    for(let i = 0; i < elems.length; i++) {
        /**
         * actual distance by which content will move
         */
        const random = () => Math.random();
        const distToMoveX = referCenterX * random() * 0.5;
        const distToMoveY = referCenterY * random() * 0.5;

        const rotate = `rotate3d(${random()}, ${random()}, ${random()}, ${random()*360}deg)`;
        const translate = `translate(${-distToMoveX}px, ${-distToMoveY}px)`;
        const scale = `scale3d(${random()*2}, ${random()*2}, ${random()*2})`;
        const perspective = `perspective(${random()*20}px)`;

        const tArray = [rotate, translate, scale, perspective];
        const transform = tArray.join(" ");
        elems[i].style.setProperty("transform", transform);
    }
}
