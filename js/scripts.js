$(document).ready(function(){
  $("form#register").submit(function(event){
    event.preventDefault();
    var inputtedName=$("input.name").val();

    $(".user-name").text(inputtedName);
    $("#welcome").fadeIn();
    $("input.name").val("");
    $("input.id").val("");
  })
})
