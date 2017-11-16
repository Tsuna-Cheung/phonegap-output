$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

function submitText(){
	alert(random());
    if(random().toString=="true"){
        navigator.notification.beep(1);
    }
    else if(random().toString=="false"){
        navigator.notification.beep(2);
    }
    
}
function random()
{
    return !Math.round(Math.random());
}