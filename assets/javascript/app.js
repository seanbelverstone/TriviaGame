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

var correctAnswers;
var incorrectAnswers;
var question1 = "<p id='question'>First Question</p>";
var row = "<div class='row'>";
var col1 = "<div class='col-12'>";
var answers = [
    answer1 = $("<a><div id='answer1'>Text1</div></a>"),
    answer2 = $("<a><div id='answer2'>Text2</div></a>"),
    answer3 = $("<a><div id='answer3'>Text3</div></a>"),
    answer4 = $("<a><div id='answer4'>Text4</div></a>"),
]


$(".start").click(function firstQuestion() { 
    var firstQuestion = "<div id='firstQuestion'>";
    var title1 = "<h1>Question 1</h1>";
    $("#mainMenu").css("display", "none");
    $(".container").append(firstQuestion, row, col1, title1, question1, answers);
    $("#question").text("What is Gollum's hobbit name?");
    $("#answer1").text("Smeagol");
    $("#answer2").text("Merry");
    $("#answer3").text("Bilbo");
    $("#answer4").text("Deagol");
    $(".container").append($("<button type='button' class='continue btn btn-success btn-lg btn-block'>Submit</button>"));
});