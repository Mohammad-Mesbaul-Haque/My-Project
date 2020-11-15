//main function 
function colorGenerate() {
    let hexCodes = ['0', '1', '2', '3', '4', '5',  '6', '7', '8', '9', 'a',  'b', 'c', 'd', 'e', 'f'];
    
    let color = '#';

    for(let i = 0; i < 6; i++) {
        let number = Math.round(Math.random() * 15);
        let number2 = hexCodes[number];
        color += number2;
    }
    //dom manipulation using colorGenerate();

    document.getElementById('container').style.backgroundColor = color;
    document.getElementById('output').style.color = color;
    document.getElementById('output').innerHTML = color;

}