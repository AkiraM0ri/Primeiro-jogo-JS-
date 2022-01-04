const puppet = document.querySelector(".puppet");

let OffSetY = 0, OffSetX = 0;


function walkUp() {
    OffSetY -= 20
    puppet.style.top = OffSetY  + 'px'
}

function walkDown() {
    OffSetY += 20
    puppet.style.top = OffSetY + 'px'
}

function walkRight(){
    OffSetX += 20
    puppet.style.left = OffSetX + 'px'
}
function walkLeft(){
    OffSetX -= 20
    puppet.style.left = OffSetX + 'px'
}

function control(e) {
    e.keyCode == 38 ? walkUp() : null;
    e.keyCode == 40 ? walkDown() : null;
    e.keyCode == 39 ? walkRight() : null;
    e.keyCode == 37 ? walkLeft() : null;
}

document.addEventListener('keydown', control)



