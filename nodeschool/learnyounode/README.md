# javascripting

from [nodeschool](https://nodeschool.io/index.html)

# LEARN YOU THE NODE.JS FOR MUCH WIN!  

## HELLO WORLD (Exercise 1 of 13)  

Write a program that prints the text "HELLO WORLD" to the console  
(stdout).  

─────────────────────────────────────────────────────────────────────────────  

## HINTS  

To make a Node.js program, create a new file with a .js extension and  
start writing JavaScript! Execute your program by running it with the node  
command. e.g.:  

  `$ node program.js`  

You can write to the console in the same way as in the browser:  

  `console.log("text")`

When you are done, you must run:  

  `$ learnyounode verify program.js`  

to proceed. Your program will be tested, a report will be generated, and  
the lesson will be marked 'completed' if you are successful.  


## BABY STEPS (Exercise 2 of 13)  

 Write a program that accepts one or more numbers as command-line arguments  
 and prints the sum of those numbers to the console (stdout).  

─────────────────────────────────────────────────────────────────────────────  

## HINTS  

 You can access command-line arguments via the global process object. The  
 process object has an argv property which is an array containing the  
 complete command-line. i.e. process.argv.  

 To get started, write a program that simply contains:  

    `console.log(process.argv)`

 Run it with node program.js and some numbers as arguments. e.g:  

    `$ node program.js 1 2 3 `

 In which case the output would be an array looking something like:  

    `[ 'node', '/path/to/your/program.js', '1', '2', '3' ]`  

 You'll need to think about how to loop through the number arguments so  
 you can output just their sum. The first element of the process.argv array  
 is always 'node', and the second element is always the path to your  
 program.js file, so you need to start at the 3rd element (index 2), adding  
 each item to the total until you reach the end of the array.  

 Also be aware that all elements of process.argv are strings and you may  
 need to coerce them into numbers. You can do this by prefixing the  
 property with + or passing it to Number(). e.g. +process.argv[2] or  
 Number(process.argv[2]).  

 learnyounode will be supplying arguments to your program when you run  
 learnyounode verify program.js so you don't need to supply them yourself.  
 To test your program without verifying it, you can invoke it with  
 learnyounode run program.js. When you use run, you are invoking the test  
 environment that learnyounode sets up for each exercise.  


## MY FIRST I/O! (Exercise 3 of 13)  

  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  

  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.  

 ─────────────────────────────────────────────────────────────────────────────  

## HINTS  

  To perform a filesystem operation you are going to need the fs module from  
  the Node core library. To load this kind of module, or any other "global"  
  module, use the following incantation:  

     `var fs = require('fs')`  

  Now you have the full fs module available in a variable named fs.  

  All synchronous (or blocking) filesystem methods in the fs module end with  
  'Sync'. To read a file, you'll need to use  
  fs.readFileSync('/path/to/file'). This method will return a Buffer object  
  containing the complete contents of the file.  

  Documentation on the fs module can be found by pointing your browser here:  
  file:///usr/lib64/node_modules/learnyounode/node_apidoc/fs.html  

  Buffer objects are Node's way of efficiently representing arbitrary arrays  
  of data, whether it be ascii, binary or some other format. Buffer objects  
  can be converted to strings by simply calling the toString() method on  
  them. e.g. var str = buf.toString().  

  Documentation on Buffers can be found by pointing your browser here:  
  file:///usr/lib64/node_modules/learnyounode/node_apidoc/buffer.html  

  If you're looking for an easy way to count the number of newlines in a  
  string, recall that a JavaScript String can be .split() into an array of  
  substrings and that '\n' can be used as a delimiter. Note that the test  
  file does not have a newline character ('\n') at the end of the last line,  
  so using this method you'll end up with an array that has one more element  
  than the number of newlines.  
## MY FIRST I/O! (Exercise 3 of 13)  

   Write a program that uses a single synchronous filesystem operation to  
   read a file and print the number of newlines (\n) it contains to the  
   console (stdout), similar to running cat file | wc -l.  

   The full path to the file to read will be provided as the first  
   command-line argument (i.e., process.argv[2]). You do not need to make  
   your own test file.  

  ─────────────────────────────────────────────────────────────────────────────  

## HINTS  

   To perform a filesystem operation you are going to need the fs module from  
   the Node core library. To load this kind of module, or any other "global"  
   module, use the following incantation:  

      var fs = require('fs')  

   Now you have the full fs module available in a variable named fs.  

   All synchronous (or blocking) filesystem methods in the fs module end with  
   'Sync'. To read a file, you'll need to use  
   fs.readFileSync('/path/to/file'). This method will return a Buffer object  
   containing the complete contents of the file.  

   Documentation on the fs module can be found by pointing your browser here:  
   file:///usr/lib64/node_modules/learnyounode/node_apidoc/fs.html  

   Buffer objects are Node's way of efficiently representing arbitrary arrays  
   of data, whether it be ascii, binary or some other format. Buffer objects  
   can be converted to strings by simply calling the toString() method on  
   them. e.g. var str = buf.toString().  

   Documentation on Buffers can be found by pointing your browser here:  
   file:///usr/lib64/node_modules/learnyounode/node_apidoc/buffer.html  

   If you're looking for an easy way to count the number of newlines in a  
   string, recall that a JavaScript String can be .split() into an array of  
   substrings and that '\n' can be used as a delimiter. Note that the test  
   file does not have a newline character ('\n') at the end of the last line,  
   so using this method you'll end up with an array that has one more element  
   than the number of newlines.  
## MY FIRST ASYNC I/O! (Exercise 4 of 13)  

    Write a program that uses a single asynchronous filesystem operation to  
    read a file and print the number of newlines it contains to the console  
    (stdout), similar to running cat file | wc -l.  

    The full path to the file to read will be provided as the first  
    command-line argument.  

   ─────────────────────────────────────────────────────────────────────────────  

# HINTS  

    The solution to this problem is almost the same as the previous problem  
    except you must now do it the Node.js way: asynchronous.  

    Instead of fs.readFileSync() you will want to use fs.readFile() and  
    instead of using the return value of this method you need to collect the  
    value from a callback function that you pass in as the second argument. To  
    learn more about callbacks, check out:  
    (https://github.com/maxogden/art-of-node#callbacks).  

    Remember that idiomatic Node.js callbacks normally have the signature:  

  `function callback (err, data) { /* ... */ }`  

    so you can check if an error occurred by checking whether the first  
    argument is truthy. If there is no error, you should have your Buffer  
    object as the second argument. As with readFileSync(), you can supply  
    'utf8' as the second argument and put the callback as the third argument  
    and you will get a String instead of a Buffer.  

    Documentation on the fs module can be found by pointing your browser here:  
    file:///usr/lib64/node_modules/learnyounode/node_apidoc/fs.html  


## FILTERED LS (Exercise 5 of 13)  

     Create a program that prints a list of files in a given directory,  
     filtered by the extension of the files. You will be provided a directory  
     name as the first argument to your program (e.g. '/path/to/dir/') and a  
     file extension to filter by as the second argument.  

     For example, if you get 'txt' as the second argument then you will need to  
     filter the list to only files that end with .txt. Note that the second  
     argument will not come prefixed with a '.'.  

     Keep in mind that the first arguments of your program are not the first  
     values of the process.argv array, as the first two values are reserved for  
     system info by Node.  

     The list of files should be printed to the console, one file per line. You  
     must use asynchronous I/O.  

    ─────────────────────────────────────────────────────────────────────────────  

## HINTS  

     The fs.readdir() method takes a pathname as its first argument and a  
     callback as its second. The callback signature is:  

   `function callback (err, list) { /* ... */ }`

     where list is an array of filename strings.  

     Documentation on the fs module can be found by pointing your browser here:  
     file:///usr/lib64/node_modules/learnyounode/node_apidoc/fs.html  

     You may also find node's path module helpful, particularly the extname  
     method.  

     Documentation on the path module can be found by pointing your browser  
     here: file:///usr/lib64/node_modules/learnyounode/node_apidoc/path.html  

    ─────────────────────────────────────────────────────────────────────────────  
