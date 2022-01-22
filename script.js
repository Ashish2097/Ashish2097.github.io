let positionX;
let positionY;

/**
 * factor by which cursors movement will affect content
 */
const translationWeight = 0.2;

const setCursorPosition = (event) => {
    positionX = event.clientX;
    positionY = event.clientY;

    
    setContentCoordinates();
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
