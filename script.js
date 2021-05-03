

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
}

function saveCount() {
    var save = {
        cursors: cursors
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function loadCount() {

}


function shopButtonClick() {

}

    if (localStorage.cursors == null) {
        var cursors = 0
        localStorage.setItem('cursors', cursors)
    }

    if (localStorage.cursors != null) {
        var cursors = localStorage.cursorCount
    }

    if (localStorage.cursorCost == null) {
        var cursorCost = Math.floor(10 * Math.pow(1.1, parseInt(localStorage.cursors)));
        console.log(cursorCost)

        localStorage.setItem('cursorCost', cursorCost)
    }

    var cursorCost = parseInt(localStorage.cursorCost)
    var cursorCount =  parseInt(localStorage.getItem('cursors'))

function buyCursor() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var cursorCost = Math.floor(10 * Math.pow(1.1, cursorCount));

    if (localStorage.clickcount < cursorCost) {

        alert('You do not have enough monkes to buy this!')
    } else if (localStorage.clickcount >= cursorCost) {
        cursorCount = cursorCount + 1;

        localStorage.setItem('cursors', cursorCount)
        localStorage.setItem('cursorCost', cursorCost)
        
        localStorage.clickcount = localStorage.clickcount - cursorCost;
        document.getElementById('cursors').innerHTML = cursorCount;
        document.getElementById('result').innerHTML = "Monke button was pressed " + localStorage.clickcount + " times"

        window.setInterval(function() {
            clickCounter(cursorCount);

        }, 1000);

    };
    var nextCost = Math.floor(10 * Math.pow(1.1, cursorCount));

    document.getElementById('cursorCost').innerHTML = cursorCost;

};


window.onload = function() {
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.clickcount + " times";

    parseInt(localStorage.getItem('clickcount'))

    document.getElementById('cursors').innerHTML = cursorCount
    document.getElementById('cursorCost').innerHTML = cursorCost

    for (var i=0; i < cursorCount; i++) {
        window.setInterval(function() {
            clickCounter(cursorCount);

        }, 1000);
    }

}

window.onbeforeunload = function() {
    return "Are you sure you want to leave the worlds best game?";
    console.log('e')
};
