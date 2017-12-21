//Global Variables (accessible by all functions)
// =============================================================

//TRIVIA QUESTION VARIABLE which holds the trivia question objects
var questions = [{
	question: "How many years were Dorothy and Stan married?", 
	answers:  ["38", "23", "10", "30"],
	correctAnswer: "38" 
},   {
	question: "What was the name of Sophia's retirement home?", 
	answers:  ["Shady Oaks", "Manor Pines", "Shady Pines", "Pompano Keys"],
	correctAnswer: "Shady Pines"
},   {
	question: "What did everyone call Blanche's father?", 
	answers:  ["General", "Big Daddy", "Sir", "Father"],
	correctAnswer: "Big Daddy"
},   {
	question: "What were the names of Rose's husband and long-time boyfriend?",
	answers:  ["Stan and Charlie", "Clayton and Miles", "Sal and Fernando", "Charlie and Miles"],
	correctAnswer:  "Charlie and Miles"
},   {
	question: "What phrase did Sophia use to start all of her stories?",
	answers:  ["Imagine This:", "Pictured It:", "Once Upon A Time", "Back in my day,"],
	correctAnswer: "Picture It:"
},   {
	question: "Rose's childhood bear was accidentally given to a Sunshine cadet.  What was it's name?",
	answers:  ["Teddy", "Beary", "Fernando", "Mr. Bear"],
	correctAnswer: "Fernando"
},   {
	question: "What does 'B.E.D.' stand for on the book on Blanche's nightstand?",
	answers:  ["Blanche Elizabeth Devereaux", "Blanche's Eating Diary", "Blanche's Extra-curricular Diary", "Banged Every Dude"],
	correctAnswer: "Blanche Elizabeth Devereaux"
},   {
	question: "What was Dorothy's profession?",
	answers:  ["Grief Counselor", "Nurse", "Museum Curator", "Substitute Teacher"],
	correctAnswer: "Substitute Teacher"
},   {
	question: "What '80s celebrety were the girls trying to meet when they were arrested for prostitution and Sophia had to bail them out?",
	answers:  ["Tom Selleck", "Tina Turner", "Julio Iglesias", "Burt Reynolds"],
	correctAnswer: "Burt Reynolds"
},   {
	question: "Who said it? 'CONDOMS, ROSE! CONDOMS, CONDOMS, CONDOMS!!'",
	answers: ["Dorothy", "Rose", "Blanche", "Sophia"],
	correctAnswer: "Dorothy"
}];



//FUNCTIONS (code to call and run as needed)
// ===========================================================

//start the timers by running the start function
$("#start").on("click", function() {
	console.log("game will start")
	counters.start();
})

	



//create a variable to hold the counters
var counters = {
	correctCounter: 0,
	incorrectCounter: 0,
	timeCounter: 30,

	//define the countdown function
	countdown: function () {
		counters.timeCounter--;
		$("#counter").html(counters.timeCounter);
		if(counters.timeCounter<=0){
			console.log("Game Over!");
			counters.done();
		}
	},
	//define the start function
	start: function(){

		//defines & sets the countdown rate
		timer = setInterval(counters.countdown,1000);

		// this will clear the Screen 1 info
		$("#subwrapper").remove();

		//this will add the time remaining to the html file and show the countdown
		$("#wrapper").prepend("<h3>Time Remaining: <span id='counter'>30</span> Seconds</h3>");

		
		//Displays the instructions
		$("#wrapper").append("<h6> Choose the correct answers before the timer runs out.  Click the GOLDEN GIRLS below when you are finished! </h6>");
	
		//create a for loop to loop through the questions
		for (var i=0;i<questions.length;i++){

			//and append the wrapper in the html document to display the questions
			$("#wrapper").append("<h4>"+questions[i].question+"</h4>");
	
			//create a for loop to loop through the answers
			for (var j=0;j<questions[i].answers.length;j++){

				//and append the wrapper in the html document to display the answers
				$("#wrapper").append("<input type='radio' name='question-"+i+" 'value='" +questions[i].answers[j]+"'>" +questions[i].answers[j])
			}
		}
	},
	//define the done function
	done: function(){
		$.each($("input[name="question-0]":checked"),function(){
			if($(this).val()==questions[0].correctAnswer){
				counters.correctCounter++;
			}  else {
				counters.incorrectCounter++;
			}
		});


	})
}


	

//This is the blue print for new question, or constructor.
function Question(newQuestion, correct, wrong1, wrong2, wrong3){
	this.correct = correct
	this.wrong1 = wrong1
	this.wrong2 = wrong2
	this.wrong3 = wrong3
	this.triviaQuestion = newQuestion
}
//this defines the new object, which is a new instance of a triviaQuestion
var question1 = new Question(questions[0], 38, 23, 10, 30)
	console.log (question1.triviaQuestion)
	console.log (question1.correct)
	console.log (question1.wrong1)
	console.log (question1.wrong2)
	console.log (question1.wrong3)


//checkAnswers function is code that needs to run to verify if the answers are correct
var checkAnswers = function() {

	//check if chosenAnswer is equal to correctAnswer
	if(chosenAnswer == correct) {

		//add to correctCounter
		correctCounter++;

		//update html with correct count
		$("#correctCounter").html(correctCounter);
	}

	//check if chosenAnswer is equal to incorrectAnswer
	if(chosenAnswer == wrong) {

		//add to incorrectCounter
		incorrectCounter++;

		//update html with correct count
		$("#incorrectCounter").html(incorrectCounter);
	}

}


//


//MAIN PROCESS (code that controls what is run)
// ==============================================================

// Start the game by running the startGame() function
  //startGame();

//Start timer



  // Run code to end each round.
    //roundComplete();