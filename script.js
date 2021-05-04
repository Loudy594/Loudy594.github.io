function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kNum + " times";
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var click = parseInt(localStorage.clickcount)

function numFormatter(click) {

    if(click > 999 && click < 1000000){
        return (click/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(click > 1000000){
        return (click/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million 
    }else if(click < 900){
        localStorage.setItem('kNum', localStorage.clickcount); // if value < 1000, nothing to do
    }
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
var cursorCount = parseInt(localStorage.getItem('cursors'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyCursor() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var cursorCost = Math.floor(10 * Math.pow(1.05, cursorCount));

    if (localStorage.clickcount < cursorCost) {

        alert('You do not have enough monkes to buy this!')
    } else if (localStorage.clickcount >= cursorCost) {
        cursorCount = cursorCount + 1;

        localStorage.setItem('cursors', cursorCount)
        localStorage.setItem('cursorCost', cursorCost)

        localStorage.clickcount = localStorage.clickcount - cursorCost;
        document.getElementById('cursors').innerHTML = cursorCount;
        document.getElementById('cursorCost').innerHTML = cursorCount;
        document.getElementById('result').innerHTML = "Monke button was pressed " + localStorage.kNum + " times"

        window.setInterval(function () {
            clickCounter(cursorCount);

        }, 1000);

    };
    var nextCost = Math.floor(10 * Math.pow(1.05, cursorCount));

    document.getElementById('cursorCost').innerHTML = cursorCost;

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (localStorage.bananas == null) {
    var bananas = 0
    localStorage.setItem('bananas', bananas)
}

if (localStorage.bananas != null) {
    var bananas = localStorage.bananaCount
}

if (localStorage.bananaCost == null) {
    var bananaCost = Math.floor(40 * Math.pow(1.15, parseInt(localStorage.bananas)));
    console.log(bananaCost)

    localStorage.setItem('bananaCost', bananaCost)
}

var bananaCost = parseInt(localStorage.bananaCost)
var bananaCount = parseInt(localStorage.getItem('bananas'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buyBanana() {

    //  document.getElementById('cursors').innerHTML = JSON.parse(localStorage.getItem('save')).cursors

    var bananaCost = Math.floor(40 * Math.pow(1.15, bananaCount));

    if (localStorage.clickcount < bananaCost) {

        alert('You do not have enough bananas to buy this!')
    } else if (localStorage.clickcount >= bananaCost) {
        bananaCount = bananaCount + 1;

        localStorage.setItem('bananas', bananaCount)
        localStorage.setItem('bananaCost', bananaCost)

        localStorage.clickcount = localStorage.clickcount - bananaCost;
        document.getElementById('banana').innerHTML = bananaCount;
        document.getElementById('bananaCost').innerHTML = bananaCost;   
        document.getElementById('result').innerHTML = "Monke button was pressed " + localStorage.kNum + " times"

        window.setInterval(function () {
            clickCounter(bananaCount);

        }, 250);

    };
    var nextCost = Math.floor(40 * Math.pow(1.1, bananaCount));

    document.getElementById('bananaCost').innerHTML = bananaCost;

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function buyMultipleCursors() {
    parseInt(localStorage.clickcount)
    parseInt(localStorage.cursors)
    console.log(cursorCost)
    if (localStorage.clickcount >= cursorCost*10) {

        localStorage.clickcount = localStorage.clickcount - cursorCost*10;

        localStorage.cursors = localStorage.cursors + 10;
        localStorage.cursorCost
    } else if (localStorage.clickcount < cursorCost*10) {
        alert('You do not have enough monkes to buy 10 Cursors.')
    }
}
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function () {


    parseInt(localStorage.getItem('clickcount'))

    document.getElementById('cursors').innerHTML = cursorCount
    document.getElementById('cursorCost').innerHTML = cursorCost

    for (var i = 0; i < cursorCount; i++) {
        window.setInterval(function () {
            
            clickCounter(cursorCount);

        }, 1000);
    }
    document.getElementById('banana').innerHTML = bananaCount
    document.getElementById('bananaCost').innerHTML = bananaCost

    for (var i = 0; i < bananaCount; i++) {
        window.setInterval(function () {
            clickCounter(bananaCount);

        }, 250);
    }

    for (var i = 0; i < 1; i++) {
        window.setInterval(function () {
            var click = parseInt(localStorage.clickcount)
            console.log(click)
            const kNum = numFormatter(click);
            console.log(kNum)
            localStorage.setItem('kNum', kNum)
        }, 250);
    }
    document.getElementById("result").innerHTML = "Monke button was pressed " + localStorage.kNum + " times";
}

window.onbeforeunload = function () {
    return "Are you sure you want to leave the worlds best game?";
    console.log('e')
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
