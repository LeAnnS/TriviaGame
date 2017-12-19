//Global Variables (accessible by all functions)
// =============================================================

var questions =["How many years were Dorothy and Stan married?", "What was the name of Sophia's retirement home?", "What did everyone call Blanche's father?", "What were the names of Rose's husband and long-time boyfriend?", "How did Sophia start all of her stories?", "Rose's childhood bear was accidentally given to a Sunshine cadet.  What was it's name?"]





//FUNCTIONS (code to call and run as needed)
// ===========================================================

//Define the startGame Function
	//Displays Questions & Answer Options
	//Starts countdown timer

	//



//constructor for new question
function Question(newQuestion, correct, wrong1, wrong2, wrong3){
	this.correct = correct
	this.wrong1 = wrong1
	this.wrong2 = wrong2
	this.wrong3 = wrong3
	this.triviaQuestion = newQuestion
}

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