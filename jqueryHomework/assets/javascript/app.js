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
var intervalID;
var cardTimer = 16;

function game(){

    var i = 0;
    console.log("game initiated");
    timer(cardTimer);
    showQuestion(i);
    $(document).on("click", "input", function(){
        var choice = $(this); 
        var choiceValue = choice[0].value;
        console.log(choiceValue);
        if(cardTimer > 0){
            if (choiceValue == "true"){
                console.log("true evaluating correctly")
                rights++; 
                i++; 
                console.log(i);
                clearCard();
                if(i <= Object.keys(questions).length -1){
                timer();
                showQuestion(i);
                }
                else {
                showResults();
                }
            }
            else if (choiceValue == "false") {
                wrongs++;
                console.log("false evaluating correctly", wrongs);
                i++;
                clearCard();
                if(i <= Object.keys(questions).length -1){
                timer();
                showQuestion(i);
                }
                else {
                    showResults();
                }
            }
        }
        else if (cardTimer === 0){
            unanswereds++;
            i++;
            if (i <= Object.keys(questions).length -1){
                timer();
                showQuestion(i);
            }
            else {
                showResults();
            }
           
        }
    });

   
};

// function that will loop through questions object and print question text and answers to page 
// inside questionCard with radio button for choices
function showQuestion(i){

    //local variables for each question in the question obj
    var questionObj = Object.keys(questions);
    var questionText = questions[questionObj[i]].question;
    var answerObj = Object.keys(questions[questionObj[i]].answers);
    var answerText = questions[questionObj[i]].answers;

    // forEach loops through the answers object within the question obj
    // creates an answer button and appends to page
    answerObj.forEach(function(key){
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

function clearCard(){
    $(".question").html("");
    $(".choices").html("");
}

function showResults(){
    var line = $("<p>");
            var rightAnswers = `You got ${rights} answers correct!`; 
            var wrongAnswers = `You got ${wrongs} answers incorrect!`;
            $(".question").html("Game over!");
            $(".choices").html(`
            <div class="col-md-12">
            <p> ${rightAnswers} </p>
            <br>
            <p> ${wrongAnswers} </p>
            </div>`);
}

function timer(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 500);

    function decrement(){
        cardTimer--;
        $(".timer").html(`<h3> ${cardTimer} </h3>`);
    };
};

game();
