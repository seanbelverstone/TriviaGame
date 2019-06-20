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

$(".start").click(function firstQuestion() { 
    var firstQuestion = "<div id='firstQuestion'>";
    var row = "<div class='row'>";
    var col1 = "<div class='col-12'>";
    var title1 = "<h1>Question 1</h1>";
    var question1 = "<p>Test test test</p>";
    var questionForm1 = "<div class='form-check'> <input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked> <label class='form-check-label' for='exampleRadios1'>Answer 1</label>";
    $("#mainMenu").css("display", "none");
    $(".container").append(firstQuestion, row, col1, title1, question1, questionForm1);




});