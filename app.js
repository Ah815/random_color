var colorNameArray = ["yellow", "green", "pink", "blue", "coral", "darkorange",
    "white", "black", "red", "grey", "brown", "darkgreen",
    "darkblue", "bluevoilet", "maroon", "deeppink", "orange", "purple", "aqua", "brightred"]

var randomnum = Math.random()
function gettherandomnumber() {
    var getnum = (randomnum * 20) + 1
    var num = Math.floor(getnum)
    switch (num) {
        case 1:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[0];
        case 2:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[1];
        case 3:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[2];
        case 4:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[3];
        case 5:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[4];
        case 6:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[5];
        case 7:
            document.getElementById('random').innerHTML = "Random no " + num
            document.getElementById('ch_div').style.color = 'black';
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[6];
        case 8:
            document.getElementById('random').innerHTML = "Random no " + num
            document.getElementById('ch_div').style.color = 'white';
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[7];
        case 9:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[8];
        case 10:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[9];
        case 11:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[10];
        case 12:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[11];
        case 13:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[12];
        case 14:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[13];
        case 15:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[14];
        case 16:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[15];
        case 17:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[16];
        case 18:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[17];
        case 19:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[18];
        case 20:
            document.getElementById('random').innerHTML = "Random no " + num
            return document.getElementById('ch_div').style.backgroundColor = colorNameArray[19];
        default:
            alert('Number is not given')
    }
}
var button = document.getElementById('btn')
button.addEventListener('click', gettherandomnumber)