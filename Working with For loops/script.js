var areaCodes = [
  "770",
  "404",
  "718",
  "202",
  "901",
  "305",
  "312",
  "313",
  "215",
  "803",
];
for (x = 0; x < areaCodes.length - 1; x++) { 
  document.write("Different Area Code:" + areaCodes[x] + "<br>");
}
/*1. initializes a variable called x and sets its initial value to 0. This variable will be used to keep track of the current position in the areaCodes array.

2. x < areaCodes.length - 1 is the condition that determines whether the loop should continue or not. It checks if the value of x is less than the length of the areaCodes array minus 1. The loop will continue as long as this condition is true upto the second last element in the array.

3. x++ is the increment statement that increases the value of x by 1 after each iteration of the loop.
4. Inside the loop, document.write("Different Area Code:" + areaCodes[x] + "<br>"); writes some text to the document. It concatenates the string "Different Area Code:" with the value at the current position x in the areaCodes array. The <br> tag represents a line break in HTML, so each output will appear on a new line.
