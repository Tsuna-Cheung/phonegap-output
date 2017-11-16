var words = [
    "It is certain",
    "As I see it, yes",
    "It is decidedly so",
    "Most likely",
    "Without a doubt",
    "Outlook good",
    "Yes definitely",
    "Yes",
    "You may rely on it",
    "Signs point to yes",   
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "Without a doubt", 
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

/*function submitText(){
    
    var rand = random();
    
    console.log(rand);
    
	alert(rand);
    
    if(rand) {
         console.log("beeb once");
        navigator.notification.beep(1);
        navigator.vibrate(2000);
    }
    else {
        console.log("beeb twice");
        navigator.notification.beep(2);
        navigator.vibrate(2000);
    }
}
function random()
{
    return !Math.round(Math.random());
}*/
function submitText(){
      var rand = random();
  console.log(rand);
  var result = words[rand];
  if(rand<10)
      {
          navigator.notification.beep(1);
      }
   else if(rand>=10)
       {
           navigator.vibrate(2000);
       }
  alert(result);
}

function random() {
  var num = Math.floor(Math.random() * 20);
  return num;
}
