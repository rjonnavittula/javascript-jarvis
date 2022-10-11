Bot.send("Hello and Welcome to Movie suggesting ChatBot ");
Bot.send("Do you Want to watch a Movie");

async function respond(msg){

	if (msg.toLowerCase() == "yes"){
			Bot.send("which genere would you like to prefer. Comedy,Sci-fi , Thriller,Horror, "  )
	} else if (msg == "no"){
			Bot.send("Okay No problem just say yes when you are interested to watch a movie ")
	}
			

else if (msg.toLowerCase() == "thirller"){
	Bot.send("Inside Man (2006), Widows (2018), Birdbox")
}
else if (msg.toLowerCase() == "comedy"){
	Bot.send("Central Intelligence, Jumanji")
}
else if (msg.toLowerCase() == "sci-fi"){
	Bot.send("Star trek, Lost in space  ")
}
else if (msg.toLowerCase() == "horror"){
	Bot.send("Annabelle Returns, Conjuring")
}



}
	Bot.send("HI MY NAME IS LEXY");
	Bot.send("Would you like to hear a joke ?");
	
	async function respond (inputText)
	{
	
		inputText = inputText.toLowerCase();
		if (inputText == "yes" || inputText == "yeah" )
		{Bot.send("What fo you call a bee that comes from america?");
		 Bot.send("USB");}
		 	else if (inputText == "no" || inputText == "nope")
		 {Bot.send("Ok have a nice day! ");}
	}
	

/*Type your code here .. */
Bot.send("HI am Radha krishna's assistant");
async function respond(inputText) {
	inputText = inputText.toLowerCase();
	if (inputText == "hi" || inputText == "hola" || inputText == "hello")
		Bot.send("What would you like to know about him ?");
	else if (inputText.includes("hobbies"))
		Bot.send("Radha krishna likes to read books, play video games");
	else if (inputText.includes("dob") || inputText.includes("Date of Birth"))
		Bot.send("Radha krishna was born on 14/09/2005");
	else if (inputText.includes("mother's name"))
		Bot.send("Radha krishna's mother's name is Siri Annapurna");
	else if (inputText.includes("father's name"))
		Bot.send("Radha krishna's father's name is J Murali krishna");
	else if (inputText.includes("brother's name"))
		Bot.send("Radha krishna's brother's name is J Ananth krishna");
	else if (inputText.includes("sister's name"))
		Bot.send("Radha krishna's sister's name is J Sri Haripriya");
	else if (inputText.includes("class"))
		Bot.send("Radha krishna is currently in 10th class");
	else if (inputText.includes("siblings"))
		Bot.send("Radha krishna has two siblings J Ananth krishna and J Sri Haripriya");
	else if (inputText.includes("friends"))
		Bot.send("Radha krishna has three best friends S karthik kumar, BV Indirapriyadarshini and Sri Mokshit");
	else if (inputText.includes("age"))
		Bot.send("Radha krishna is 14 years old");


	else Bot.send("Please ask something else");
}
/*Type your code here .. */
Bot.send("Type a number between 1 to 100");
async function reply(inputNumber) {

	try {
		if (isNaN(inputNumber)) throw "not a number";
		if (inputNumber < 1 || inputNumber > 100) throw "out of range";
		var i;
		for (i = 1; i <= 10; i += 1) {
			Bot.send(inputNumber  * i);
		}
	} catch (er) {
		Bot.send("Input is " + er);
	}
}
var firstNumber;
var secondNumber;
var state = "Numbers";
var Numbers;
Bot.send("PLease input two numbers separated by a space");
async function respond(inputText) {
	if (state == "Numbers") {
		 Numbers = inputText.split(" ");
		firstNumber = Numbers[0];
		secondNumber = Numbers[1];
		console.log(Numbers);
		state = "operation";
		Bot.send("please enter + to add, - to subtract, * to multiply, / to divide");
	}
	else if (state == "operation") {

		if (inputText == "+") {
			var answer = (add(firstNumber, secondNumber));
			Bot.send(answer);
			Bot.send("would you like to continue with new numbers ?");
			state = "Numbers";
			if (inputText == "yes"){
				Bot.send ("please enter two numbers separated by a space");
			}

		}
		else if (inputText == "*")
			Bot.send(multiply(firstNumber, secondNumber));
		else if (inputText == "-")
			Bot.send(subtract(firstNumber, secondNumber));
		else if (inputText == "/")
			Bot.send(divide(firstNumber, secondNumber));
	}
}
function add(a, b) {
	return Number(a) + Number(b);
}
function multiply(a, b) {
	return Number(a) * Number(b);
}
function subtract(a, b) {
	return Number(a) - Number(b);
}
function divide(a, b) {
	return Number(a) / Number(b);
}
var age;
Bot.send("Hi welcome to age checker voting bot");
Bot.send("Please enter your age");
async function respond(inputText) {
	age = parseInt(inputText);
	if (age >= 18) {
		Bot.send("You are eligible to vote");
	}
	else
		Bot.send("you are not eligible to vote");
}
Bot.send("Hi welcome to odd even bot");
Bot.send("please enter a number to check if its odd or even");
async function respond(inputText){
		try {
		if (isNaN(inputText)) throw "not a number";
		
	
	if (inputText % 2 === 0 ){
		Bot.send("This number is even");
	}
	else Bot.send("This number is odd");
 } catch (er) {
	 Bot.send("Input " + er );
 }
}
Bot.send("Hi welcome to translator bot, say hi to continue");

var status ;
var language1 ;
var language2 ;
var translatedtext ;

status = "greetings" ;
language1 = "" ;
language2 = "" ;
async function respond(inputText){
	inputText = inputText.toLowerCase();
	if (status == "greetings"){
		Bot.send("What is your name");
		status = "name" ;
		console.log(status);
	} 
	else if (status == "name")
	{
		var name = CampK12.getNouns(inputText);
		Bot.send("hi "+ name +" nice to meet you");
		Bot.send("Enter the first language to translate from");
		status = "language1" ;
		console.log(status);
	} 
	else if (status == "language1"){
		language1 = inputText ;
		Bot.send("Enter the second language to translate to");
		status = "language2" ;
		console.log(status);
	}
	else if (status == "language2"){
		language2 = inputText ;
		Bot.send("Enter the text which you would like to translate");
		status = "text" ;
		Bot.send("If you would like to reset then please press the 'r' key ");
		console.log(status);
	}
	else if (status == "text"){
		if (inputText == "r"){
			status = "greetings";
		}
		else var translatedtext = await CampK12.translate(inputText, language1, language2);
		Bot.send(translatedtext);

	}
		
	
 }
Bot.send("Hi and welcome to Quizzobot");
Bot.send("Do you want to play a quiz");
var score = 0;
var question_no = 0;
var questions;
var answers;
async function respond(inputText) {
	inputText = inputText.toLowerCase();
	questions = ["What is capital of Maharashtra?", "Which northern state has 2 capitals?", "Ranchi is capital of?", "What is capital of Nagaland?", "What is capital of Gujrat?", "Bhopal is capital of?", "What is capital of Meghalaya?"];
	answers = ["mumbai", "jammu and kashmir", "jharkhand", "kohima", "gandhinagar", "madhya pradesh", "shillong"];

	if (inputText == "yes") {

		Bot.send("Great , here's your first question");
		await Bot.sleep(2000);
		Bot.send(questions[question_no]);
	}
	else if (inputText == "no") {
		Bot.send("Thank you have a great day ahead");
	}
	else if (inputText == answers[question_no]) {
		if (question_no == 6) {
			Bot.send("Correct answer");
			Bot.send("Thanks for playing the quiz have a great day ahead");
		}
		else {
			question_no = question_no + 1;
			console.log(inputText, question_no);
			Bot.send("correct answer");
			Bot.send("Here's your next question");
			Bot.send(questions[question_no]);
		}

	}
	else {
		Bot.send("Incorrect answer");

		if (question_no == 6) {
			Bot.send("Thanks for playing the quiz, have a great day ahead");
		}
		else {question_no = question_no + 1;
		console.log(inputText, question_no);
		Bot.send("Here's your next question");
		Bot.send(questions[question_no]);
	}}
}
/*Type your code here .. */
async function respond(inputText){
	var score = await CampK12.getSentimentScore(inputText);
	console.log(score);
	if (score > 0){
		Bot.send("Happiness is not something ready made 😄");
	} 
	else if (score < 0){
		Bot.send("All our dreams can come true, if we have the courage to pursue them.😎");
	}
	else Bot.send("How was your day today😐");
 
 }

const WELCOME = 0 ;
const MENU = 1 ;
const NAME = 2 ;
const MENU_REASSIGN = 3 ;
const SENTIMENT = 4 ;
const TRANSLATE = 5 ;
const CHOOSE_LANGUAGE = 6 ;
const TEMPERATURE = 7 ;
const INFO = 8 ;

var name = "" ;
var output ;
var inputLanguage  ;
var state = WELCOME ;
var temperature ;
var city ;
var choice ;
async function getTemperature(cityName){
var result = await CampK12.fetch("GET", " https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=37d99f4c8bd8fa96d4509c54c8a262d7");
var temperature=result.main.temp;
var tempInCelsius=temperature-273;
tempInCelsius=tempInCelsius.toFixed(2);
return tempInCelsius;
}
Bot.send("Say Hi or Hello to begin");
async function respond(inputText){
	var choice ;
	inputText = inputText.toLowerCase().trim() ;
	if (inputText == "hi" || inputText == "hello"){
		Bot.send("Hi my name is lexy, the  chat bot. what is your name ?");
	state = NAME ;
	}
	else if (inputText == "bye"){
		Bot.send("Bye have a nice day");
		state = WELCOME ;
	}
	else if (state == NAME || state == MENU_REASSIGN){
	if (state == NAME){
	name = inputText ;  
	}


Bot.send("hi " + name + " ");
Bot.send("I am capable of doing three things for you");
Bot.send("1. Predict if your happy or sad");
Bot.send("2. Tell the temperature of your city");
Bot.send("3. Translate the text for you ");
Bot.send("4. I could cheer you up by telling you a joke");
Bot.send("5. I am Radhakrishna's assistant. would you like to know about him");
Bot.send("Enter a number of your choice to interact with me");
Bot.send("Say Bye to exit");

state = MENU ;


} else if (state == MENU){
	choice = inputText;
	choice = parseInt(choice) ;
	switch(choice){
		case 1 : Bot.send("How are you feeling today ?");
				state = SENTIMENT ;
				break ;
		case 2 : Bot.send("Which city are you currently in ?");
				state = TEMPERATURE ;
				break ;
		case 3 : Bot.send("Which language would you like to translate into ?");
				state = CHOOSE_LANGUAGE ;
				break ;
		case 4 : Bot.send("Lets cheer you up with this joke");
			Bot.send("What do you call a bee that comes from america?");
			Bot.send("USB");
			break ;
		case 5  : Bot.send("What do you want to know about him");
				state = INFO ;
				break ;
		default : Bot.send("invalid choice please choose an input from 1,2,3,4");
	}
}
else if (state == SENTIMENT){
	var sentimentscore = await CampK12.getSentimentScore(inputText);
	if (sentimentscore  < -0.1){
		Bot.send("You seem to be sad today 😭");
		Bot.send("I can cheer you up by telling you a motivational quote");
		Bot.await(2000);
		Bot.send("All our dreams can come true, if we have the courage to pursue them.😎");
		
	}
	else if (sentimentscore > 0.1){
		Bot.send("You seem to be happy today 😄");
	}
	else {
		Bot.send("It is a normal statement 😐");
	}
	state = MENU_REASSIGN ;
}

else if (state == TEMPERATURE){
	var city = inputText ;
	var temperature = await getTemperature(city);
	Bot.send("The current temperature in your city is " + temperature + " °C");
	state = MENU_REASSIGN ;
}
else if (state == CHOOSE_LANGUAGE){
	inputLanguage = inputText ;
	Bot.send("PLease type in a sentence which you would like to translate to " + inputLanguage);
	state = TRANSLATE ; 
}
else if (state == TRANSLATE){
	var output = await CampK12.translate(inputText, "english", inputLanguage);
	Bot.send("The same sentence in " + inputLanguage + " is" );
	Bot.send(output);
	state = MENU_REASSIGN ;
}
else if (state == INFO){
	
	
	if (inputText.includes("hobbies"))
		Bot.send("Radha krishna likes to read books, play video games");
	else if (inputText.includes("dob") || inputText.includes("Date of Birth"))
		Bot.send("Radha krishna was born on 14/09/2005");
	else if (inputText.includes("mother's name"))
		Bot.send("Radha krishna's mother's name is Siri Annapurna");
	else if (inputText.includes("father's name"))
		Bot.send("Radha krishna's father's name is J Murali krishna");
	else if (inputText.includes("brother's name"))
		Bot.send("Radha krishna's brother's name is J Ananth krishna");
	else if (inputText.includes("sister's name"))
		Bot.send("Radha krishna's sister's name is J Sri Haripriya");
	else if (inputText.includes("class"))
		Bot.send("Radha krishna is currently in 10th class");
	else if (inputText.includes("siblings"))
		Bot.send("Radha krishna has two siblings J Ananth krishna and J Sri Haripriya");
	else if (inputText.includes("friends"))
		Bot.send("Radha krishna has three best friends S karthik kumar, BV Indirapriyadarshini and Sri Mokshit");
	else if (inputText.includes("age"))
		Bot.send("Radha krishna is 14 years old");


}
else Bot.send("Have a nice day!");
}

Bot.send("Hi welcome to wheather predector bot");
Bot.send("Please enter the name of your city");
async function respond(inputText){
	inputText = inputText.toLowerCase();
	var city = inputText ;
	var temperature = await getTemperature (city);
	Bot.send("The current temperature in " + city + " is " + temperature + " °C");
 }
 	async function getTemperature(cityName){
var result = await CampK12.fetch("GET", " https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=37d99f4c8bd8fa96d4509c54c8a262d7");
var temperature=result.main.temp;
var tempInCelsius=temperature-273;
tempInCelsius=tempInCelsius.toFixed(2);
return tempInCelsius;
}

Bot.send("Hi welcome to wheather predector bot");
Bot.send("Please enter the name of your city");
async function respond(inputText){
	inputText = inputText.toLowerCase();
	var city = inputText ;
	var temperature = await getTemperature (city);
	Bot.send("The current temperature in " + city + " is " + temperature + " °C");
 }
 	async function getTemperature(cityName){
var result = await CampK12.fetch("GET", " https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=37d99f4c8bd8fa96d4509c54c8a262d7");
var temperature=result.main.temp;
var tempInCelsius=temperature-273;
tempInCelsius=tempInCelsius.toFixed(2);
return tempInCelsius;
}

var length ;
Bot.send("welcome to Palindrome checking bot");
Bot.send("Enter a word and i will tell you if its palindrome or not");
async function respond(inputText){
	inputText = inputText.toLowerCase();
	var check = palindrome(inputText) ;
	if (check === true){
		Bot.send("The entered word is a palindrome");
	}
	else {
		Bot.send("The entered word is not a palindrome");
	}
	function palindrome (inputText){
		length = inputText.length ;
	for (var i = 0; i <= length/2 ; i++) {
		if (inputText[i]  !== inputText[length - 1 - i]) {
		return false ; 
		}
		return true ;
	}
	}
 }

var infolist ;
var i ;
var choice ;
Bot.send("Hi, Myself Vyommitra, AN ISRO bot.");
Bot.send("Do you want to know about me Vyommitra? Then press 1");
Bot.send("Do you want know about ISRO? then press 2");
Bot.send("Do you want to know about ongoing projects? then press 3");
Bot.send("Do you want to know about LAUNCHERS developed by ISRO? then press 4");
async function respond(inputText){
	infolist = ["Vyommitra is a female spacefaring humanoid robot being developed by the Indian Space Research Organisation to function on-board the Gaganyaan, a crewed orbital spacecraft. Vyommitra was first unveiled on 22 January 2020 at the Human Spaceflight and Exploration symposium in Bengaluru", "The Indian Space Research Organisation is the space agency of the Government of India and has its headquarters in the city of Bengaluru. Its vision is to \"harness space technology for national development while pursuing space science research & planetary exploration", "Chandrayaan-2 – Lunar mission. Gaganyaan – Human spaceflight. PSLV-C45 – Launching satellites from three different orbits. SSLV – Small satellite vehicle. Reusable Launch Vehicle. NISAR Satellite", "Sounding Rockets SLV ASLV PSLV GSLV GSLV Mk III RLV-TD Scramjet Engine - TD"];
	Bot.send("your choice is " + inputText);
	try {
		if(isNaN(inputText)) throw "not a number" ;
	choice = inputText;
	choice = parseInt(choice) ;
	switch(choice){
		case 1 : Bot.send(infolist[0]);
					break ;
		case 2 : Bot.send(infolist[1]);
					break ;
		case 3 : Bot.send(infolist[2]);
					break ;
		case 4 : Bot.send(infolist[3]);
					break ;
		default : Bot.send("Please choose any option from 1,2,3,4");
	}
	
	} catch (er) {
		Bot.send("Input is " + er);

 }}
