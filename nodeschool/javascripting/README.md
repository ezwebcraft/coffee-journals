# javascripting

from [nodeschool](https://nodeschool.io/index.html)


## info

Learn the basics of JavaScript. No previous programming experience required.

`npm install -g javascripting`


# JAVASCRIPTING  

## INTRODUCTION (Exercise 1 of 19)  

 To keep things organized, let's create a folder for this workshop.  

 Run this command to make a directory called javascripting (or something  
 else if you like):  

    mkdir javascripting  

 Change directory into the javascripting folder:  

    cd javascripting  

 Create a file named introduction.js:  

    touch introduction.js  

 Or if you're on Windows:  

    type NUL > introduction.js  

 (type is part of the command!)  

 Open the file in your favorite editor, and add this text:  

    console.log('hello');  

 Save the file, then check to see if your program is correct by running  
 this command:  

    javascripting verify introduction.js  

 By the way, throughout this tutorial, you can give the file you work with  
 any name you like, so if you want to use something like catsAreAwesome.js  
 file for every exercise, you can do that. Just make sure to run:  

    javascripting verify catsAreAwesome.js  

## VARIABLES (Exercise 2 of 19)  

 A variable is a name that can reference a specific value. Variables are  
 declared using var followed by the variable's name.  

 Here's an example:  

    var example;  

 The above variable is declared, but it isn't defined (it does not yet  
 reference a specific value).  

 Here's an example of defining a variable, making it reference a specific  
 value:  

    var example = 'some string';  

# NOTE  

 A variable is declared using var and uses the equals sign to define the  
 value that it references. This is colloquially known as "Making a variable  
 equal a value".  

## The challenge:  

 Create a file named variables.js.  

 In that file declare a variable named example.  

 Make the variable example equal to the value 'some string'.  

 Then use console.log() to print the example variable to the console.  

 Check to see if your program is correct by running this command:  

 javascripting verify variables.js  

## STRINGS (Exercise 3 of 19)  

  A string is a sequence of characters. A character is, roughly speaking, a  
  written symbol. Examples of characters are letters, numbers, punctuation  
  marks, and spaces.  

  String values are surrounded by either single or double quotation marks.  

     'this is a string'  

     "this is also a string"  

## NOTE  

  Try to stay consistent. In this workshop we'll only use single quotation  
  marks.  

## The challenge:  

  For this challenge, create a file named strings.js.  

  In that file create a variable named someString like this:  

     var someString = 'this is a string';  

  Use console.log to print the variable someString to the terminal.  

  Check to see if your program is correct by running this command:  

  javascripting verify strings.js  

## STRING LENGTH (Exercise 4 of 19)  

  You will often need to know how many characters are in a string.  

  For this you will use the .length property. Here's an example:  

     var example = 'example string';  
     example.length  

## NOTE  

  Make sure there is a period between example and length.  

  The above code will return a number for the total number of characters in  
  the string.  

## The challenge:  

  Create a file named string-length.js.  

  In that file, create a variable named example.  

  Assign the string 'example string' to the variable example.  

  Use console.log to print the length of the string to the terminal.  

  Check to see if your program is correct by running this command:  

  javascripting verify string-length.js     

## REVISING STRINGS (Exercise 5 of 19)  

  You will often need to change the contents of a string.  

  Strings have built-in functionality that allow you to inspect and  
  manipulate their contents.  

  Here is an example using the .replace() method:  

     var example = 'this example exists';  
     example = example.replace('exists', 'is awesome');  
     console.log(example);  

  Note that to change the value that the example variable references, we  
  need to use the equals sign again, this time with the example.replace()  
  method to the right of the equals sign.  

## The challenge:  

  Create a file named revising-strings.js.  

  Define a variable named pizza that references this string: 'pizza is  
  alright'  

  Use the .replace() method to change alright to wonderful.  

  Use console.log() to print the results of the .replace() method to the  
  terminal.  

  Check to see if your program is correct by running this command:  

  javascripting verify revising-strings.js  

## NUMBERS (Exercise 6 of 19)  

  Numbers can be integers, like 2, 14, or 4353, or they can be decimals,  
  also known as floats, like 3.14, 1.5, or 100.7893423. Unlike Strings,  
  Numbers do not need to have quotes.  

## The challenge:  

  Create a file named numbers.js.  

  In that file define a variable named example that references the integer  
  123456789.  

  Use console.log() to print that number to the terminal.  

  Check to see if your program is correct by running this command:  

  javascripting verify numbers.js  

## ROUNDING NUMBERS (Exercise 7 of 19)  

  We can do basic math using familiar operators like `+, -, *, /, and %. `

  For more complex math, we can use the Math object.  

  In this challenge we'll use the Math object to round numbers.  

## The challenge:  

  Create a file named rounding-numbers.js.  

  In that file define a variable named roundUp that references the float  
  1.5.  

  We will use the Math.round() method to round the number up. This method  
  rounds either up or down to the nearest integer.  

  An example of using Math.round():  

     Math.round(0.5);  

  Define a second variable named rounded that references the output of the  
  Math.round() method, passing in the roundUp variable as the argument.  

  Use console.log() to print that number to the terminal.  

  Check to see if your program is correct by running this command:  

     javascripting verify rounding-numbers.js  

## NUMBER TO STRING (Exercise 8 of 19)  

  Sometimes you will need to turn a number into a string.  

  In those instances you will use the .toString() method. Here's an example:  

     var n = 256;  
     n = n.toString();  

## The challenge:  

  Create a file named number-to-string.js.  

  In that file define a variable named n that references the number 128;  

  Call the .toString() method on the n variable.  

  Use console.log() to print the results of the .toString() method to the  
  terminal.  

  Check to see if your program is correct by running this command:  

     javascripting verify number-to-string.js  


## IF STATEMENT (Exercise 9 of 19)  

  Conditional statements are used to alter the control flow of a program,  
  based on a specified boolean condition.  

  A conditional statement looks like this:  

     if (n > 1) {  
       console.log('the variable n is greater than 1.');  
     } else {  
       console.log('the variable n is less than or equal to 1.');  
     }  

  Inside parentheses you must enter a logic statement, meaning that the  
  result of the statement is either true or false.  

  The else block is optional and contains the code that will be executed if  
  the statement is false.  

## The challenge:  

  Create a file named if-statement.js.  

  In that file, declare a variable named fruit.  

  Make the fruit variable reference the value orange with the type of  
  String.  

  Then use console.log() to print "The fruit name has more than five  
  characters." if the length of the value of fruit is greater than five.  
  Otherwise, print "The fruit name has five characters or less."  

  Check to see if your program is correct by running this command:  

     javascripting verify if-statement.js  


## FOR LOOP (Exercise 10 of 19)  

      For loops allow you to repeatedly run a block of code a certain number of  
      times. This for loop logs to the console ten times:  

         for (var i = 0; i < 10; i++) {  
           // log the numbers 0 through 9  
           console.log(i)  
         }  

      The first part, var i = 0, is run once at the beginning of the loop. The  
      variable i is used to track how many times the loop has run.  

      The second part, i < 10, is checked at the beginning of every loop  
      iteration before running the code inside the loop. If the statement is  
      true, the code inside the loop is executed. If it is false, then the loop  
      is complete. The statement i < 10; indicates that the loop will continue  
      as long as i is less than 10.  

      The final part, i++, is executed at the end of every loop. This increases  
      the variable i by 1 after each loop. Once i reaches 10, the loop will  
      exit.  

## The challenge:  

      Create a file named for-loop.js.  

      In that file define a variable named total and make it equal the number 0.  

      Define a second variable named limit and make it equal the number 10.  

      Create a for loop with a variable i starting at 0 and increasing by 1 each  
      time through the loop. The loop should run as long as i is less than  
      limit.  

      On each iteration of the loop, add the number i to the total variable. To  
      do this, you can use this statement:  

         total += i;  

      After the for loop, use console.log() to print the total variable to the  
      terminal.  

      Check to see if your program is correct by running this command:  

         javascripting verify for-loop.js  

## ARRAYS (Exercise 11 of 19)  

           An array is a list of values. Here's an example:  

              var pets = ['cat', 'dog', 'rat'];  

### The challenge:  

           Create a file named arrays.js.  

           In that file define a variable named pizzaToppings that references an  
           array that contains three strings in this order: tomato sauce, cheese,  
           pepperoni.  

           Use console.log() to print the pizzaToppings array to the terminal.  

           Check to see if your program is correct by running this command:  

              javascripting verify arrays.js  

## ARRAY FILTERING (Exercise 12 of 19)  

               There are many ways to manipulate arrays.  

               One common task is filtering arrays to only contain certain values.  

               For this we can use the .filter() method.  

               Here is an example:  

                  var pets = ['cat', 'dog', 'elephant'];  

                  var filtered = pets.filter(function (pet) {  
                    return (pet !== 'elephant');  
                  });  

               The filtered variable will now only contain cat and dog.  

## The challenge:  

               Create a file named array-filtering.js.  

               In that file, define a variable named numbers that references this array:  

               Like above, define a variable named filtered that references the result of  
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

               numbers.filter().  

               The function that you pass to the .filter() method will look something  
               like this:  

                  function evenNumbers (number) {  
                    return number % 2 === 0;  
                  }  

               Use console.log() to print the filtered array to the terminal.  

               Check to see if your program is correct by running this command:  

                  javascripting verify array-filtering.js  
