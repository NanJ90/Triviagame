// var question = 

var timeLeft =31;
var intervalId;
$("button").on("click",function(){

function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      timeLeft--;
      $("#timer").html("Time Remaining: " + timeLeft + " seconds"); 
      //  Once number hits zero...
      if (timeLeft === 0) {
        //  ...run the stop function.
        stop();
      }
    }

  run();
  var questions = [
  'In the 2016 American fantasy adventure film, "The Jungle Book", what is the name of the orphaned human boy?',
]
  var questionDiv = $(".selectGroup").append("<p id ='questions'>");
  $("#questions").html(questions[0]);
 function stop(){
 	clearInterval(intervalId);
 }



var result = setTimeout(function(){

$("#result").html("<h2> All Done!"); 
	
}, 32 * 1000);	
});




// if(userAnswer === anwer){


// }