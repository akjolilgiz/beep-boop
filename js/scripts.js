// business logic
  var beepConverter = function(number){
    if (isNaN(number)) {
     return output = "Please Enter a NUMBER!";
   }
       else if (number % 3 === 0) {
         return output = "I'm sorry, Dave. I'm afraid I can't do that.";
     }
       else if (number.toString().includes(0)) {
         return output= "Boop!";
       }
         else if (number.toString().includes(1)){
         return output = "Beep!";
        }
          else {
            var range = function(start, number) {
              var arr = [];
              for (let i = start; i<=number; i++){
                arr.push(i);
                } return arr;}
              return output = (range(0, number));}
}


//user interface



$(document).ready(function() {
  $("form#Beep-Boop").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());

    var output = beepConverter(number);

    $("#result").text(output);
    $("#result").show();

  });
});
