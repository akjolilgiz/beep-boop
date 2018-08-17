
  var beepConverter = function(number){
    var indNumbers = [];
    var digits = number.toString();

    for (var i = 0, i <digit.length, i += 1) {
      indNumbers.push(+digits.charAt(i));
  }
      // result.push(+digits.charAt());
    }
    });


     if (isNaN(number)) {
      return output = 1;
    }
        else if (number % 30 === 0) {
          return output=2;
      }
        else if (one.includes(number(i))) {
          alert(digits)
                }
        else {
        alert("Beep");
      }
    }




$(document).ready(function() {
  $("form#Beep-Boop").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val();

    var output = beepConverter(number);

    if (output === 1) {
      output = "Please Enter A Number"
    } else if (output === 2){
      output = "I'm sorry, Dave. I'm afraid I can't do that."}
    // } else if

    $("#result").text(output);
  });
});
