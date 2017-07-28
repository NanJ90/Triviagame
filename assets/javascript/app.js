$(document).ready(function(){

 $("body").on("click","button", function(event){
  event.preventDefault();
  generateHTML();

});

var timeLeft =31;
var intervalId;
var rightAnswer = 0;
var wrongAnswer = 0;
var unanswered =0;
var clickButton = false;


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
  


 function stop(){
 	clearInterval(intervalId);
 }



for (i = 0; i < questons.length; i++){
  if (clickanswer){
    unanswered++;
  }
  else if (!clickanswer){
    if(userAnswer === answers){
      rightAnswer++;
    }

    else{
      wrongAnswer++;
    }
  }
}


var result = setTimeout(function(){

$("#result").html("<h2> All Done!"); 
	
}, 32 * 1000);	


});


// if(userAnswer === anwer){


// }