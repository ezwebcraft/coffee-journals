## HELLO WORLD (Exercise 1 of 11)  

     _                                         _     _             _  
    | | ___  __ _ _ __ _ __  _   _  ___  _   _| |__ | |_ _ __ ___ | |  
    | |/ _ \/ _` | '__| '_ \| | | |/ _ \| | | | '_ \| __| '_ ` _ \| |  
    | |  __/ (_| | |  | | | | |_| | (_) | |_| | | | | |_| | | | | | |  
    |_|\___|\__,_|_|  |_| |_|\__, |\___/ \__,_|_| |_|\__|_| |_| |_|_|  
                             |___/  

 Welcome to learnyouhtml!  

### What is HTML?  

 HTML or HyperText Markup Language is a markup language for creating  
 webpages. Webpages are usually viewed in a web browser. They can include  
 writing, links, pictures, and even sound and video. HTML is used to mark  
 and describe each of these kinds of content so the web browser can show  
 them correctly.  

 HTML can also be used to add meta information to a webpage. Meta  
 information is information about the web page. For example, the name of  
 the person who made it. Meta information is not usually shown by web  
 browsers.  

 HTML was made by the World Wide Web Consortium (W3C). There are many  
 versions of HTML. The current standard is HTML5. So, it is the version the  
 W3C recommends.  

### Why do I need to learn HTML?  

 HTML is a cornerstone of web. It's what you see I your browser every time  
 you open a favorite site.  

 If you're going to work in web development area, then you definitely need  
 to know what is HTML, how to read it and how to use it.  

### Browser  

 You need to have a browser — a program to read HTML documents and display  
 them. There are a lot of them, but we recommend one of these:  

  » [Google Chrome](https://www.google.com/chrome)                              
  » [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new)                

### Editor  

 HTML-document could be created in any text editor, even Notepad.  
 Nevertheless, it would be better if you will use a special editor with  
 useful features, like syntax highlighting, tabs, autocompletions, etc.  

 We recommend you one of these text editors:  

  » [Atom](https://atom.io)                                                     
  » [Sublime Text](https://www.sublimetext.com/)                                
  » [Brackets](http://brackets.io/)                                             

### How to use this workshopper?  

 This workshopper will guide you through the simple exercises which explain  
 the core principles of HTML. In most cases, it's enough to use only three  
 commands:  

  » learnyouhtml run file.html will serve a local server at                                                                            
    http://localhost:3000/ with a preview of file.html.                         
  » learnyouhtml verify file.html will verify your file.                        
  » learnyouhtml help shows a help message.                                     

## THE CHALLENGE  

 Create a new empty file called index.html and put these lines in there:  
```html
    <!DOCTYPE html>  
    <html>  
      <head>  
        <meta charset="utf-8">  
        <title>Hello, world!</title>  
      </head>  
      <body>  
        here is a body  
      </body>  
    </html>  
```
 This is your boilerplate for all of next exercises. Everything you're  
 going to do you'll do with that snippet.   

 It's okay if you don't understand what is going on. This lines will be  
 explained in following exercises.  

 Run learnyouhtml verify to verify your solution or learnyouhtml run to see  
 the result in the browser.  

## TAGS (Exercise 2 of 11)  

  HTML uses special bits of programming language called tags to let the  
  browser know how a webpage should look. The tags usually come in pairs: an  
  opening tag to tell the browser when to start doing something, and an  
  ending tag to tell the browser when to stop doing something. There are  
  many different kinds of tags, and each one has a different purpose.  

  Let's think of tags like it's some kind of selection tool in text editors.  
  In text editor, such as Microsoft Office Word or Writer, if you want to  
  make text bold you select a part of text and click corresponding button  
  (b). In HTML, you have tags for that reason.  

                     ┌── a "selected" text ──┐  
                     ↓                       ↓  
     Lorem ipsum <tagname>dolor sit amet</tagname>, consectetur adipisicing elit.  

  Opening tags have a keyword, such as p, surrounded by angle brackets (<  
  and >). For example, the tag <p> tells the browser the start a new  
  paragraph. Ending tags look almost exactly the same, only they have a  
  forward slash (/) added just before the keyword. For example, the tag </p>  
  tells the browser to end a paragraph.  

     <p>this is a paragraph</p>  

  A small number of tags, like <br>, <img> and <hr>, can be used without an  
  ending tag. Here is what these tags do:  

   » <br> - produces a line break in text (carriage-return). It is useful                                                                            
     for writing a poem or an address, where the division of lines is                                                                            
     significant.                                                                
   » <img> — represents an image in the document. We will consider this tag                                                                            
     later.                                                                      
   » <hr> — represents a thematic break between paragraph-level elements. In                                                                            
     previous versions of HTML, it represented a horizontal rule. It may                                                                            
     still be displayed as a horizontal rule in visual browsers.                 

  You could use them like this:  

     <p>first paragraph</p>  
     <hr>  
     <p>second paragraph</p>  

### Basic HTML document  

  In previous exercise you've created a document. Let's consider its  
  content:  
```html
     <!DOCTYPE html>  
     <html>  
       <head>  
         <meta charset="utf-8">  
         <title>Hello, world!</title>  
       </head>  
       <body>  
         here is a body  
       </body>  
     </html>  
```
  Here we have a <html> tag which wrap whole document — this tag indicates  
  where HTML document begins and where it ends.  

  HTML document had its own <head> and <body>. In the <head> tag we put all  
  information about document, like meta-tags and <title>. The content of  
  <title> tag will be shown in browser's tag of this document. In the <body>  
  images, etc.  

  Probably, you still have a question: "What does <meta charset="utf-8"> tag  
  do?" Well, this is special tag — a meta-tag. Meta-tags are used for  
  describing a document. It's a bit weird, but keep thinking about meta-tags  
  as an information about information. Directly, this tag means that we want  
  to use utf-8 charset for our document.  

## THE CHALLENGE  

  You already have an HTML-document. In <body> add two paragraphs (<p>) with  
  any text you like. Please, separate these two tags with horizontal rule  
  (<hr> tag).  

  Don't forget to check your solution, run learnyouhtml verify to verify.  

## ATTRIBUTES (Exercise 3 of 11)  

    In this exercise we are going to take a look at tag's attributes.  

    Tag's attributes extend ability of tags and let us flexible control over  
    different options of displaying of elements or their behavior. There is a  
    lot of attributes for different purposes like color, size, address and so  
    on.  

    You can specify attributes like this:  

       <tag attribute1="value1" attribute2="value2">some text</tag>  
       <!-- or for self-closing tag -->  
       <tag attribute1="value1" attribute2="value2">  

    In according to HTML specification, all values of attributes should be  
    defined between double quotes (attribute="value") or single quotes  
    (attribute='value'). Omitting these quotes wouldn't cause an error,  
    because browsers, in most of cases, will handle this code correctly.  
    However, you can get a problem if you try to define value with spaces and  
    don't wrap this value in quotes. Consider this example:  

       <!-- with double quotes -->  
       <tag attribute="value with spaces"></tag>  
       <!-- with single quotes -->  
       <tag attribute='value with spaces'></tag>  
       <!-- without quotes -->  
       <tag attribute=value with spaces></tag>  

    In third example above, we have got a problem. Only value would be used as  
    an value of attribute, so with and spaces would be ignored as invalid  
    attributes. That's why we suggest you to wrap values of attributes in  
    quotes.  

    There are few important things you need to remember: if you didn't specify  
    an attribute, browser will use default values for that attribute; order of  
    attributes isn't matter, each attribute belongs to specific type (text,  
    number, path to file, etc).  

## THE CHALLENGE  

    You're already familiar with <img> tag from previous exercise. This tag  
    embeds an image on page. This tag has few important attributes:  

     » src - the image URL. This attribute is mandatory for the <img> element.     
     » alt - this attribute defines the alternative text describing the image.                                                                            
       Users will see this text displayed if the image URL is wrong or if the                                                                            
       image is not yet downloaded.                                                
     » height - the intrinsic height of the image in pixels.                       
     » width - the intrinsic width of the image in pixels.                         

    You need create an HTML document with an image. Feel free to set any  
    values for src and alt attributes.  

    If you did this, check your solution with learnyouhtml verify.  

## ATTRIBUTES (Exercise 3 of 11)  

      In this exercise we are going to take a look at tag's attributes.  

      Tag's attributes extend ability of tags and let us flexible control over  
      different options of displaying of elements or their behavior. There is a  
      lot of attributes for different purposes like color, size, address and so  
      on.  

      You can specify attributes like this:  

         <tag attribute1="value1" attribute2="value2">some text</tag>  
         <!-- or for self-closing tag -->  
         <tag attribute1="value1" attribute2="value2">  

      In according to HTML specification, all values of attributes should be  
      defined between double quotes (attribute="value") or single quotes  
      (attribute='value'). Omitting these quotes wouldn't cause an error,  
      because browsers, in most of cases, will handle this code correctly.  
      However, you can get a problem if you try to define value with spaces and  
      don't wrap this value in quotes. Consider this example:  

         <!-- with double quotes -->  
         <tag attribute="value with spaces"></tag>  
         <!-- with single quotes -->  
         <tag attribute='value with spaces'></tag>  
         <!-- without quotes -->  
         <tag attribute=value with spaces></tag>  

      In third example above, we have got a problem. Only value would be used as  
      an value of attribute, so with and spaces would be ignored as invalid  
      attributes. That's why we suggest you to wrap values of attributes in  
      quotes.  

      There are few important things you need to remember: if you didn't specify  
      an attribute, browser will use default values for that attribute; order of  
      attributes isn't matter, each attribute belongs to specific type (text,  
      number, path to file, etc).  

## THE CHALLENGE  

      You're already familiar with <img> tag from previous exercise. This tag  
      embeds an image on page. This tag has few important attributes:  

       » src - the image URL. This attribute is mandatory for the <img> element.     
       » alt - this attribute defines the alternative text describing the image.                                                                            
         Users will see this text displayed if the image URL is wrong or if the                                                                            
         image is not yet downloaded.                                                
       » height - the intrinsic height of the image in pixels.                       
       » width - the intrinsic width of the image in pixels.                         

      You need create an HTML document with an image. Feel free to set any  
      values for src and alt attributes.  

      If you did this, check your solution with learnyouhtml verify.  
