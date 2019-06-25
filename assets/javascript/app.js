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
var triviaArea = "<div id='triviaArea'>";
var counter;
var count = 30;
var pageBoolean = true;
// var setTimeout = setTimeout(function() {
//     alert("Alert #1: Called automatically 1 second after page load.");
//   }, 8000);


function timer() {
    count = count-1;
    console.log(count);
    if (count <= 0) {
        clearInterval(counter);
    };
    if (count == 0 && pageBoolean == false) {
        alert("yahoo");
        clearInterval(counter);
        displayPage();
        secondQuestion();
    };
  $("#timer").text(count);
  console.log(pageBoolean);
};

// Creating a JSON below for all of the answers. This will make it easy to access
var qaBlock = {
    first: {
        question1: "Who is Gollum's brother?",
        answers: [
            answer1 = "Deagol", //answer
            answer2 = "Grima",
            answer3 = "Merry",
            answer4 = "Smeagol",
        ],
        correctText: "Gollum, or Smeagol as he was formerly known, had a brother called Deagol who he killed in order to obtain The One Ring.",
        relatedGif: "<iframe src='https://giphy.com/embed/eKdAVlKkv1qSs' width='480' height='194' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",
    },
    second: {
        question2: "At the beginning of 'Fellowship', how many rings are given to the elves?",
        answers: [
            answer1 = "2",
            answer2 = "3", //answer
            answer3 = "4",
            answer4 = "5",
        ],
        correctText: "'It began with the forging of the great rings: three were given to the Elves, immortal, wisest and fairest of all beings.'",
        relatedGif: "<iframe src='https://giphy.com/embed/yxWgMeXtuqiHu' width='480' height='372' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    third: {
        question3: "During his birthday speech, which of the following families are NOT mentioned by Bilbo?",
        answers: [
            answer1 = "The Bolgers",
            answer2 = "The Boffins",
            answer3 = "The Grubbs",
            answer4 = "The Cottons", //answer
        ],
        correctText: "Bilbo's exact words are 'My dear Bagginses and Boffins, Tooks and Brandybucks, Grubbs, Chubbs, Hornblowers, Bolgers, Bracegirdles and Proudfoots.'",
        relatedGif: "<iframe src='https://giphy.com/embed/J35MhCksOhOxy' width='480' height='235' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    fourth: {
        question4: "Sam uses Sting to kill some Orcs. In which 'Lord Of The Rings' movie did this happen?",
        answers: [
            answer1 = "The Fellowship of the Ring",
            answer2 = "The Two Towers",
            answer3 = "Return of the King", //answer
            answer4 = "The Hobbit",
        ],
        correctText: "Frodo dropped his sword after Shelob got him. Sam used it to fight Shelob and kill the Orcs who had taken Frodo.",
        relatedGif: "<iframe src='https://giphy.com/embed/HqFVIIP3fmGbe' width='480' height='211' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    fifth: {
        question5: "Who do we see arrive first for the council of Elrond?",
        answers: [
            answer1 = "Legolas",
            answer2 = "Borimir", //answer
            answer3 = "Gandalf",
            answer4 = "Aragorn",
        ],
        correctText: "Borimir arrives first, on horseback, with a round shield upon his back.",
        relatedGif: "<iframe src='https://giphy.com/embed/6j0CWwaTSVIBy' width='480' height='353' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    sixth: {
        question6: "A flock of black birds, spies of Saruman, fly over the Fellowship. What sort of birds are they?",
        answers: [
            answer1 = "Wargs",
            answer2 = "Nazgul",
            answer3 = "Ravencroft",
            answer4 = "Crebain", //answer
        ],
        correctText: "The Fellowship see the flock flying towards them and it is Legolas who exclaims, 'Crebain from Dunland.'",
        relatedGif: "<iframe src='https://giphy.com/embed/OWN2yWTGPRc7m' width='480' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    seventh: {
        question7: "Who is the Lord of the Eagles?",
        answers: [
            answer1 = "Gwaihir", //answer
            answer2 = "Elrond",
            answer3 = "Gandalf",
            answer4 = "Landroval",
        ],
        correctText: "Lord of the Eagles was the title specifically reserved for Gwaihir the Windlord, who led the Eagles of Middle-earth as Thorondor went back to Valinor.",
        relatedGif: "<iframe src='https://giphy.com/embed/TnMOoyQNLtaJa' width='480' height='197' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    eigth: {
        question8: "Who does Aragorn say he is a friend of during his first meeting with Boromir?",
        answers: [
            answer1 = "Gandalf", //answer
            answer2 = "Gondor",
            answer3 = "Gimli",
            answer4 = "Galadriel",
        ],
        correctText: "Boromir: Who are you? Aragorn: I'm a friend of Gandalf the Grey. Boromir: Then we are here on a common purpose... friend.",
        relatedGif: "<iframe src='https://giphy.com/embed/13HHdPgxg2DAyc' width='480' height='200' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    ninth: {
        question9: "Whose tomb do the Fellowship visit whilst in Moria?",
        answers: [
            answer1 = "Dwalin",
            answer2 = "Kili",
            answer3 = "Balin", //answer
            answer4 = "Fili",
        ],
        correctText: "When they find the tomb in Moria, Gandalf translates the runes: 'Here lies Balin, son of Fundin, Lord of Moria. He is dead then. It's as I feared.'",
        relatedGif: "<iframe src='https://giphy.com/embed/lDauPrcncnuIU' width='480' height='212' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    tenth: {
        question10: "Who is Sauron's master?",
        answers: [
            answer1 = "Morgoth", //answer
            answer2 = "Eru",
            answer3 = "Manwë",
            answer4 = "Fëanor",
        ],
        correctText: "Sauron was Morgoth's lieutenant. Morgoth was previously known as Melkor.",
        relatedGif: "<iframe src='https://giphy.com/embed/SzHIeJo1aVWog' width='480' height='200' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    eleventh: {
        question11: "In all three movies, how many times do we see the One Ring worn on Frodo's finger?",
        answers: [
            answer1 = "2",
            answer2 = "4", //answer
            answer3 = "6",
            answer4 = "8",
        ],
        correctText: "He first wears it in the Village of Bree, in the Inn of the Prancing Pony. Later, he wears it in Weathertop when the five Ringwraiths are after him. He wears it again at the end of the first movie while trying to get away from Boromir. He wears it for the last time in Mount Doom, as he succumbs to the Ring's pull.",
        relatedGif: "<iframe src='https://giphy.com/embed/RcqAkSRf1H3bO' width='480' height='203' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
    twelfth: {
        question12: "Which of the following does Bilbo NOT mention as being loved by Hobbits?",
        answers: [
            answer1 = "Peace",
            answer2 = "Food",
            answer3 = "All Things Growing",
            answer4 = "Dancing", //answer
        ],
        correctText: "The full quote reads: 'In fact, it has been remarked by some that the Hobbits' only real passion is for food. A rather unfair observation, as we have also developed a keen interest in the brewing of ales, and the smoking of pipe-weed. But where our hearts truly lie is in peace and quiet, and good tilled earth. For all Hobbits share a love of things that grow.",
        relatedGif: "<iframe src='https://giphy.com/embed/ENlBwUH8VGRxK' width='480' height='244' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>",

    },
}

// function setAnswers() {
//     for (var i = 0; i < Array.length; i++) {
//         $("ul").append("<li>" + Array[i] + "</li>");
//     }
// }            trying to use a function to append array items instead of having to write it out manually

function displayPage() {
    $(".container").empty();
    var title1 = "<h1>Question 1</h1>";
    $(".container").append(triviaArea, row, col1, title1);
    $(".container").append("<div id='timer'>");
    timer();
    counter = setInterval(timer, 1000);
    pageBoolean = true;
}

$(".start").click(function() { 
    $("#mainMenu").css("display", "none");
    displayPage();
    firstQuestion();

    $(".correct").click(function correct() {
        winLosePage();
        correctAnswers++;
    });

    $(".incorrect").click(function incorrect() {
        winLosePage();
        $("h1").text("That's wrong!");
        incorrectAnswers++;

    });
});

//win/lose page function
function winLosePage() {
    $(".container").empty();
    pageBoolean = false;
    var triviaArea = "<div id='triviaArea'>";
    var correct = "<h1>Correct!</h1>";
    clearInterval(counter);
    $(".container").append(triviaArea, row, col1, correct, qaBlock.first.correctText, qaBlock.first.relatedGif);
    timer();
    count = 8;
    counter = setInterval(timer, 1000);
    console.log(pageBoolean);
};


function firstQuestion() {
    $(".container").append("<div id='question'>" + qaBlock.first.question1 + "</div>");
    $(".container").append("<button type='button' class='correct btn btn-danger btn-lg btn-block'>" + qaBlock.first.answers[0]);
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.first.answers[1]);
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.first.answers[2]);
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.first.answers[3]);
};

// second question
function secondQuestion() {
    $("h1").text("Question 2");
    count = 30;
    $(".container").append("<div id='question'>" + qaBlock.second.question2 + "</div>");
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.second.answers[0]);
    $(".container").append("<button type='button' class='correct btn btn-danger btn-lg btn-block'>" + qaBlock.second.answers[1]);
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.second.answers[2]);
    $(".container").append("<button type='button' class='incorrect btn btn-danger btn-lg btn-block'>" + qaBlock.second.answers[3]);
};