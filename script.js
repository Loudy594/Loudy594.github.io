var shopButton = document.getElementById("shopButton");
var secretButton = document.getElementById("secretButton");
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
var displayCount2 = document.getElementById("displayCount").textContent;
var goBack = document.getElementById("goBack");
var count = 0;


shopButton.onclick = function() {
displayCount.innerHtml = localStorage.clickcount-100
}


/*document.getElementById("result").innerHTML = localStorage.getItem("lastname");*/
countButton.onclick = function() {
   

    if (localStorage.clickcount === 69) {
        monker.innerHTML = "You have reached 69. Noice."
    } else if (localStorage.clickcount === 1000) {
        monker.innerHTML = "Wow. You're still here. Impressive!"
    } else if (localStorage.clickcount === 6900) {
        monker.innerHTML = "Congrats on getting 6900. Why are you still playing this again?"
    } else if (localStorage.clickcount === 10000) {
        monker.innerHTML = "10000. Almost as high as my chess elo."
    } else if (localStorage.clickcount === 50000) {
        monker.innerHTML = "50000. Jesus. You are on the verge of becoming a monke no-life"
    } else if (localStorage.clickcount === 69000) {
        monker.innerHTML = "69000. hehe boi. you should really stop now. is your autoclicker wearing out?"
    } else if (localStorage.clickcount === 100000) {
        monker.innerHTML = "If you're still clicking, I honestly don't know what to say. Why are we still here... just to suffer."
    } else if (localStorage.clickcount === 690000) {
        monker.innerHTML = "ajajajjajajajaj"
    } else if (localStorage.clickcount === 1000000) {
        monker.innerHTML = "If you're not using an autoclicker you 100% have arthritis."
    } else if (localStorage.clickcount === 1000000000) {
        monker.innerHTML = "bro... why are you still here? You've cilcked one billion times. Do you have nothing else to do with your life. You could be doing so much more with your life. You have serious issues."
    } else if (localStorage.clickcount === 1000000000000) {
        monker.innerHTML = "Even if you were to use an autoclicker at the speed of 0.1 milliseconds per click, it would take you 27777.77 hours to get this far, which is over 3 years. If you are not using an autoclicker, you have wasted your entire life, and probably the lives of your children and grandchildren who you have passed this game on to to continue clicking for ages. Or you have just bought a couple shop upgrades after a few hours. That's probably more likely. In that case, continue clicking."
    }
}





window.onbeforeunload = function () {
    return "Are you sure you want to leave the worlds best game?";
};
