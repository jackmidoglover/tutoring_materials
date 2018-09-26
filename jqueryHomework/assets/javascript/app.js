var questions = {
    one: {
        question: "What class has a sneak attack bonus?",
        answers: {
            a: {text: "Fighter", value: false},
            b: {text: "Rogue", value: true},
            c: {text: "Wizard", value: false},
            d: {text: "Mage", value: false}
        }
    },
    two: {
        question: "What class can use turn undead?", 
        answers: {
            a: {text: "Clerics", value: true}, 
            b: {text: "Paladins", value: false},
            c: {text: "Necromancers", value: false},
            d: {text: "Druids", value: false}
        }
    },
    three: {
        question: "What do you call a local of Waterdeep?",
        answers: {
            a: {text: "Waterdeepians", value: false}, 
            b: {text: "Waterdeeps", value: false},
            c: {text: "Waterpeeps", value: false},
            d: {text: "Waterdhavians", value: true}
        }
    }
}; 
var rights = 0;
var wrongs = 0; 
var unanswereds= 0;
var cardTimer = 16;
var intervalID;

function start() {
    console.log("Game started");
     rights = 0;
     wrongs = 0;
     unanswereds = 0;
     cardTimer = 16;
    game();
}

function game(){
    console.log("game initiated");
    showQuestion();
   
};


function choosing(){

};

function showQuestion(){
    //local variables for each question in the question obj
    var i = 0;
    var questionObj = Object.keys(questions);
    var questionText = questions[questionObj[i]].question;
    var answerObj = Object.keys(questions[questionObj[i]].answers);
    var answerText = questions[questionObj[i]].answers;

    // forEach loops through the answers object within the question obj
    // creates an answer button and appends to page
    answerObj.forEach(function(key){
        console.log(answerText[key].text);
        console.log(answerText[key].value);
        var answerButton = $("<input>")
        .addClass("radio").attr({
            "id": key,
            "type": "radio",
            "value": answerText[key].value,
            "name": key
        });
        $(".choices").append($("<div>")
        .addClass("radio container")
        .append(answerButton)
        .append(
            $("<label>")
            .attr("for", key)
            .html(answerText[key].text)
        )
        );
    });
    $(".question").html(questionText);
  
};


start();



// console.log(question[index].question);
// $(".question").html(question[index].question);
// var answers = Object.values(question[index]);
// for (var text in answers){
//     console.log(text);
//     var answerButton = $("<input>")
//         .addClass("radio")
//         .attr({"id": text, "type" : "radio", "value" : answers[text].value, "name": "choice"});
//     $(".choices").append($("<div>")
//     .addClass("radio container")
//     .append(answerButton)
//     .append(
//         $("<label>" )
//         .attr("for", text)
//         .html(answers[text].text)
//     ));

// };