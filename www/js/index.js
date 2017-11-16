$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

function submitText(){
	alert(random());
    
}
function random()
{
    return !Math.round(Math.random());
}