let name = '';

document.onkeydown = event => {
    if (event.key != 'Shift'){
        if (event.key == 'Enter'){
            document.getElementById('layer6').style.opacity = 0;
            document.getElementById('Text').innerHTML = '<h1>Hi ' + name + ', I like you!</h1>';
        } else {
            name += event.key;
            document.getElementById('layer6').style.backgroundColor = randomColor(14);
            document.getElementById('layer6').innerHTML = '';
        };
    };
};

function randomColor(brightness){
    const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (i=0; i < 6; i++){
        color += hexa[Math.floor(Math.random() * brightness)];
    };
    console.log('random color: ' + color);
    return color;
};