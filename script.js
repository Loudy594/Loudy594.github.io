var shopButton = document.getElementById("shopBUtton");
var secretButton = document.getElementById("secretButton");
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
var goBack = document.getElementById("goBack");
var count = 0;

shopButton.onclick = function() {
    console.log("e");
}

secretButton.onclick = function() {

}

countButton.onclick = function() {
    count++;
    displayCount.innerHTML = count;
    if (count === 69) {
        monker.innerHTML = "You have reached 69. Noice."
    } else if (count === 1000) {
        monker.innerHTML = "Wow. You're still here. Impressive!"
    } else if (count === 6900) {
        monker.innerHTML = "Congrats on getting 6900. Why are you still playing this again?"
    } else if (count === 10000) {
        monker.innerHTML = "10000. Almost as high as my chess elo."
    } else if (count === 50000) {
        monker.innerHTML = "50000. Jesus. You are on the verge of becoming a monke no-life"
    } else if (count === 69000) {
        monker.innerHTML = "69000. hehe boi. you should really stop now. is your autoclicker wearing out?"
    } else if (count === 100000) {
        monker.innerHTML = "If you're still clicking, I honestly don't know what to say. Why are we still here... just to suffer."
    } else if (count === 690000) {
        monker.innerHTML = "ajajajjajajajaj"
    } else if (count === 1000000) {
        monker.innerHTML = "If you're not using an autoclicker you 100% have arthritis."
    } else if (count === 1000000000) {
        monker.innerHTML = "bro... why are you still here? You've cilcked one billion times. Do you have nothing else to do with your life. You could be doing so much more with your life. You have serious issues."
    }
}
const button = document.querySelector('input[type="button"]');
button.addEventListener('click', event => {
    const othermonke = document.createElement("img");
    var monkepicture = "https://i.imgur.com/Hw8PZK0.jpg";
    othermonke.src = monkepicture;
    othermonke.width = "50";
    othermonke.height = "50";
    othermonke.alt = "alttext";
    button.parentElement.appendChild(othermonke);
});
