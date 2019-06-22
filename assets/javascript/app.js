/* Psuedocode
When the player presses the Start Quiz button, first question is displayed on screen.
This should be created by hiding the first container, and appending a new div container lablelled question 1
A timer of 30 seconds starts when this is loaded.
3 incorrect and 1 correct answers are displayed in an unordered list and the player can only select one
answer.
When they press the submit button, if the correct answer was selected then a new page shows with the text
saying 'Well done!, a picture relating to the question and an explaination why it is correct. 
If the incorrect answer was selected, the same page shows but 'Well done!' is replaced by 'Wrong answer!'.
When all questions have been completed, a results page shows with incorrect and correct answer counters.
Also have rankings for how well you did, for example:
    'You're a true member of the Fellowship'
    'You nearly made it, but Sam had to carry you the rest of the way'
    'Half isn't bad! At least you made it further than Borimir'
    'Send for the eagles! You need saving from your bad score!'
    'One does not simply walk into Mordor.'
A restart? button will be at the bottom of this page. When pressed it will start from the first question
again */

var correctAnswers = 0;
var incorrectAnswers = 0;
var row = "<div class='row'>";
var col1 = "<div class='col-12'>";
var count = 30;
var counter = setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= 0) {
    clearInterval(counter);
    $(".container").empty();
    return;
  }
  $("#timer").text(count);
}

// Creating a JSON below for all of the answers. This will make it easy to access
var qaBlock = {
    first: {
        question1: "Who is Gollum's brother?",
        answers: [
            answer1 = "Deagol",
            answer2 = "Grima",
            answer3 = "Merry",
            answer4 = "Smeagol",
        ]
    },
    second: {
        question2: "blahblahblah",
        answers: [
            answer1 = "",
            answer2 = "",
            answer3 = "",
            answer4 = "",
        ]
    },
}

// function setAnswers() {
//     for (var i = 0; i < Array.length; i++) {
//         $("ul").append("<li>" + Array[i] + "</li>");
//     }
// }            trying to use a function to append array items instead of having to write it out manually


$(".start").click(function firstQuestion() { 
    var title1 = "<h1>Question 1</h1>";
    var firstQuestion = "<div id='firstQuestion'>";
    $("#mainMenu").css("display", "none");
    $(".container").append(firstQuestion, row, col1, title1);
    $(".container").append("<div id='timer'>");
    timer();
    $(".container").append("<div id='question1'>" + qaBlock.first.question1 + "</div>");
    $(".container").append("<ul> <li>" + qaBlock.first.answers[0]);
    $(".container").append("<ul> <li>" + qaBlock.first.answers[1]);
    $(".container").append("<ul> <li>" + qaBlock.first.answers[2]);
    $(".container").append("<ul> <li>" + qaBlock.first.answers[3]);
});

