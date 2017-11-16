$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

function submitText(){
    
    var rand = random();
    
    console.log(rand);
    
	alert(rand);
    
    
    if(rand) {
         console.log("beeb once");
        navigator.notification.beep(1);
    }
    else {
        console.log("beeb twice");
        navigator.notification.beep(2);
    }
    
    
    
    if(rand.toString=="true"){
        
        navigator.notification.beep(1);
    }
    else if(rand.toString=="false"){
        console.log("beeb twice");
        navigator.notification.beep(2);
    }
    
}
function random()
{
    return !Math.round(Math.random());
}