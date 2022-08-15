function makeRed(){
    document.body.style.backgroundColor = "red";
}

const makeBlueButton = document. getElementById('make-blue');
makeBlueButton. onclick = makeBlue;

function makeBlue(){
    document. body. style. backgroundColor = 'blue';
}

document. getElementById('make-goldenrod'). addEventListener('click', function(){
    document. body. style. backgroundColor = 'goldenrod';
})