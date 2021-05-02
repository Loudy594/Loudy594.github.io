window.onload = function () {
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
    localStorage.setItem("save",JSON.stringify(save));
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

    var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));     //works out the cost of this cursor

    if (localStorage.clickcount < cursorCost) {
        alert('You do not have enough monkes to buy this!')
    } else if (localStorage.clickcount >= cursorCost) {                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors


        localStorage.clickcount = localStorage.clickcount - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('result').innerHTML = "Monke button was pressed " + localStorage.clickcount + " times" //updates the number of cookies for the user

        window.setInterval(function () {

            clickCounter(cursors);
    
        }, 1000);

    };
    var nextCost = Math.floor(10 * Math.pow(1.1, cursors));       //works out the cost of the next cursor

    document.getElementById('cursorCost').innerHTML = cursorCost;  //updates the cursor cost for the user

};


window.onbeforeunload = function () {
    return "Are you sure you want to leave the worlds best game?";
};
