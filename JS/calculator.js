var current = "";
var lastNum = "";

//numbers
$(".number").click(function() {
  current += $(this).attr("value");
  lastNum += $(this).attr("value");
  display(current);
})

//operators
$(".operator").click(function() {
  var patt = /[0-9.]$/;
  if (patt.test(current)) { // test to not allow double operators.
  current += $(this).attr("value");
  lastNum = "";
  display(current);
}
})
// percents
$("#percent").click(function() {
  var newLength = current.length - lastNum.length;

  let ans = eval(lastNum/100);
  if (current) {
    current = current.slice(0, newLength) + ans;
    lastNum = ans.toString();
  }

  display(current);
})

// decimal
$("#decimal").click(function() {
if (lastNum.indexOf(".") < 0) {
  if (current.length < 1) {
    current ="0.";
    lastNum ="0.";
  } else {
      current += $(this).attr("value");
      lastNum += $(this).attr("value");
  }
    display(current);
  }
})

// negative numbers
$("#negative").click(function() {
  var newLength = current.length - lastNum.length;

  if (/^-/.test(lastNum)) {
    lastNum = lastNum.slice(1, lastNum.length)
  }
  else if (lastNum === "") {
     lastNum = "";
  } else {
    lastNum = "-"+ lastNum;
  }

  current = current.slice(0, newLength) + lastNum;

  display(current);
})

// clears
$("#clear").click(function() {
  if (current.length > 0) {
    current = current.slice(0, (current.length - 1));
    lastNum = lastNum.slice(0, (lastNum.length-1));
  if (lastNum === "-") {
    lastNum = "";
    current = current.slice(0, (current.length - 1));
  }
    display(current);
  } else {
    allClear();
  }
})

function allClear() {
  current = "";
  lastNum = "";
  display(current);
}
$("#allClear").click(function() {
  allClear();
})

//equate
$("#equate").on('click', function() {

    //checks for double negatives which the eval Method can't parse and replaces them with plus.
    current = current.replace("--","+");

    let ans = eval(current);

    current = ans.toString();
    lastNum = current;
    display(current);
})

//display function
function display(string) {
  if (string.length > 20) {
    $("#entry").html('<p>OVERFLOW</p>');
  } else {
    var displayStr = string.replace("/","&divide");
    displayStr = displayStr.replace("*","x")
    $("#entry").html('<p>' + displayStr + '</p>');
  }
}
