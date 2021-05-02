window.onload = function() {
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";

    parseInt(localStorage.getItem('clickcount'))
}

function update() {

}

var autoClick = 0;

function timer() {
    localStorage.clickcount = localStorage.clickcount + autoClick;
    update()
}


function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";


    document.title = localStorage.clickcount + " Monkes"
}

function saveCount() {
    var save = {
        cursors: cursors
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function loadCount() {

}

function resetButton() {
    alert("Click Count Has Been Removed")
    parseInt(localStorage.getItem('clickcount'))

    localStorage.clickcount = 0
    cursors = 0;
    cursorCost = 10;
    document.getElementById('cursors').innerHTML = cursors;
    document.getElementById('cursorCost').innerHTML = cursorCost;
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";

    monker.innerHTML = "Welcome To Monke Clicker created by charlie"
}

function shopButtonClick() {

}

var cursors = 0;


function buyCursor() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));

    if (localStorage.clickcount < cursorCost) {
        alert('You do not have enough monkes to buy this!')
    } else if (localStorage.clickcount >= cursorCost) {
        cursors = cursors + 1;


        localStorage.clickcount = localStorage.clickcount - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('result').innerHTML = "Monke button was pressed " + localStorage.clickcount + " times"

        window.setInterval(function() {

            clickCounter(cursors);

        }, 1000);

    };
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));

    document.getElementById('cursorCost').innerHTML = cursorCost;

};


window.onbeforeunload = function() {
    return "Are you sure you want to leave the worlds best game?";
};
