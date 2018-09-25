var questions = {
    one: {
        question: "What class has a sneak attack bonus?",
        answers: {
            a: {text: "Fighter", value: false},
            b: {text: "Rogue", vale: true},
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
    game(questions);
}

function game(deck){
    console.log("game initiated" + deck);

    function decrement(){
        cardTimer--;
    }
    var question = Object.values(deck);
    var questionList = [];

    Object.keys(deck).forEach(function(key, index){
        questionList.push(deck[key]);
})
console.log(questionList);
};

function choosing(){

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