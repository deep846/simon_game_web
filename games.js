let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
var randomNumber;
var level = 0;


function nextSequence() {
    randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4);
    $("h1").text("LEVEL " + level);
    level++;
    // return randomNumber;
}


console.log(randomNumber);
var randomChosenColour;
randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
console.log(randomChosenColour);


$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    animate(userChosenColour);
    button(userChosenColour);
});

function animate(pressed) {

    $(`.${pressed}`).addClass("pressed");
    $(`.${pressed}`).delay(100).removeClass("pressed");

}

function button(pressed) {
    var audio = new Audio("sounds/" + pressed + ".mp3");
    audio.play();
    $(`#${pressed}`).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(document).keypress(function () {
    if (level === 0) {
        nextSequence();
    }
});

function checkAnswer(currentLevel)
{

}
