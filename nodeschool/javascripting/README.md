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
