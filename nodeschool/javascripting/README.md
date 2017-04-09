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
