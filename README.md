# FCC-Calculator
This is my advanced front-end project for [freecodecamp.com](https://www.freecodecamp.com). I put a lot of work into it so i decided to add a version to githubs. The orginal can be seen on [codepen](http://codepen.io/jjspetz/full/OWXoeO/).

### Built-with
HTML, CSS, JavaScript, and jQuery

![calculator](https://github.com/jjspetz/FCC-Calculator/blob/master/assets/calculator%20img.png)

### Biggest Challenge
The floating point rounding error present in all JavaSctipt math was annoying me, while I was testing my calculator. I came up with this code in an attempt to round off one particular error

```javascript
function roundoff(string) {
  let ans = string;
  ans = ans.replace(/[+-/*//.]/, "");

  let sum = ans.length - 1;
  
  if (string)
  return (eval(string).toFixed(sum)).replace(/0+$/, '');
}
```

It solves problems like .45/100, which will be rounded down to the expected value, but doesn't work in all cases.

### Other Lessons Learned
1) I had to use the eval() script for this project, so I spent a lot of time reading about the benefits and the potential security risk of using this script. I believe for a calculator where the user input is limited to numbers the security risk is negligible.

2) This project also taught me the value of localizing my assets as links I used in my code have broken down more frequently than I originally anticipated.
