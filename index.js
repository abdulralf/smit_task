var Arr = ["grey", "black", "blue", " lightgreen", "orange",
    "white", "green", "yellow", "brown", "darkgreen",
    "darkblue", "maroon", "pink","red"]

var randomnum = Math.random()
function gettherandomnumber() {
    var getnum = (randomnum * 14) + 1
    var floornum = Math.floor(getnum)
    switch (floornum) {
        case 1:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[0];
        case 2:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[1];
        case 3:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[2];
        case 4:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[3];
        case 5:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[4];
        case 6:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[5];
        case 7:
            document.getElementById('random').innerHTML = "Random no " + floornum
            document.getElementById('inner_div').style.color = 'black';
            return document.getElementById('inner_div').style.backgroundColor = Arr[6];
        case 8:
            document.getElementById('random').innerHTML = "Random no " + floornum
            document.getElementById('inner_div').style.color = 'white';
            return document.getElementById('inner_div').style.backgroundColor = Arr[7];
        case 9:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[8];
        case 10:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[9];
        case 11:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[10];
        case 12:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[11];
        case 13:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[12];
        case 14:
            document.getElementById('random').innerHTML = "Random no " + floornum
            return document.getElementById('inner_div').style.backgroundColor = Arr[13];
        default:
            alert('Number is not given')
    }
}

var button = document.getElementById('btn')
button.addEventListener('click', gettherandomnumber)