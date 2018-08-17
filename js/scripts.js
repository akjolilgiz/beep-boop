
  var beepConverter = function(number){
   var digits = number.toString();

     if (isNaN(number)) {
      return output = 1;
    }
        else if (number % 3 === 0) {
          return output = 2;
      }
        else if (digits.includes(0)) {
          return output=3;
                }
    //     else if (digits.includes(1)){
    //       return output = 4}
    // }
    //



$(document).ready(function() {
  $("form#Beep-Boop").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();

    var output = beepConverter(number);

    if (output === 1) {
      output = "Please Enter A Number"
    } else if (output === 2){
      output = "I'm sorry, Dave. I'm afraid I can't do that."
      } else if (output === 3){
        output = "Boop"
      } else if (output === 4){
          output = "Beep"
        }
          else {}
    $("#result").text(output);
  });
});
