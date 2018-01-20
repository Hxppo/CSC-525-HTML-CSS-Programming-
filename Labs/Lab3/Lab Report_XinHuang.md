#LAB #3 HTML5/CSS3
##Introduction

This lab will give you plenty of exercises implementing CSS and HTML. All your work should be validated using the HTML and CSS Validator link below. There are HTML attached to this lab document and they should be modified without any errors to reflect the instruction given. See the slides for examples to do your lab.  


HTML Validator: <https://validator.w3.org/>  
CSS Validator: <http://jigsaw.w3.org/css-validator/>

##Question1: Create an embedded style sheet.
Instruction: Modify emdedded_css.html to reflect the image below. Create an embedded CSS. Turn in the modified HTML and upload to EMS.  The instructions to reflect the image are listed below. 

1.The heading and paragraph text should be centered.  
2.The heading’s background must be “coral”  
3.The footer color must be yellow.

Here is the code I write to add the style to the html file: 
 
```html
<html lang="en">
<head>
    <title>Spotted Wren Garden Center</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <script src="modernizr.custom.62074.js"></script>
    <style media="screen">
        p {
            text-align: center;
        }

        h1 {
            background-color: coral;
            text-align: center;
        }

        footer {
            text-align: center;
            background-color: yellow;
        }
    </style>
<body>
    <header>
        <h1>Spotted Wren Garden Center</h1>
    </header>
    <article>
        <p>For your year-round garden and yard needs</p>
        <p>Looking for something unusual or hard to find? Ask us!</p>
    </article>
    <footer>
        <p>548 N. 58th St. | Omaha, NE 68132 | 
            <a href="tel:(402) 555-9736">(402) 555-9736</a>
        </p>
    </footer>
</body>

</html>
```

After the file is deployed to ITU server, I am able to browse it using the link:
<http://dblab.itu.edu:82/xhuand93887/Lab3/embedded_css.html>

![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab3/1.png)


##Question2: Implement an ID selector, class selector, multiple selectors

Instruction: Modify css_id_class_multi.html to reflect the image below.Create an embedded CSS. Turn in the modified HTML and upload to EMS. Theinstructions to reflect the image are listed below.  
1. The heading’s background is black.2. The heading and footer’s color is red.3. The “Authentic Chicago-style pies” text has ID selector that aligned to theright.4. The article tag should be aligned in the center.5. The paragraph `<p>` should have a class selector name contact. It should bealigned to the right.6. Add comment to all your stylesheet and HTML to document your work. Youshould have your name, author, title, and other things you might want to add.Check the slides for example


Here is the code I write to add the style to the html file:  
 
```html
<html>
<head>
    <title>Big J's Deep Dish Pizza</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <script src="modernizr.custom.62074.js"></script>

    <style media="screen">
        header {
            background-color: black;
            color: red;
        }

        footer {
            background-color: black;
            color: red;
        }

        article {
            text-align: center;
        }

        #chicago {
            text-align: right;
        }

        .contact {
            text-align: right;
        }
    </style>
</head>

<body>
    <header>
        <h1>Big J's Deep Dish Pizza</h1>
        <p id="chicago">Authentic Chicago-style pies</p>
    </header>
    <article>
        <p>Eat in, carry out, or call for delivery.</p>
        <p>Voted "Best Pizza" by the Toronto Times!</p>
    </article>
    <footer>
        <p class="contact">150 St. Joseph St.</p>
        <p class="contact">Toronto, ON M5S 2C3</p>
        <p class="contact">(416) 555-3337</p>
    </footer>
</body>
</html>
```

After the file is deployed to ITU server, I am able to browse it using the link:
<http://dblab.itu.edu:82/xhuand93887/Lab3/css_id_class_multi.html>

![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab3/2.png)

##Create an external style sheet  

Instruction: Modify external_css.html to reflect the image below. Create an external CSS. If you check the contents of this HTML file, the style sheet tag is commented out. Create an style.css file and uncomment this tag. Turn in the CSS you created and upload to EMS. The instructions to reflect the image are listed below.  
1. The heading’s background color is orangered. `<h1>`2. The heading and article’s are aligned to the center.3. The footer has a background color of green and the color of the text is white.4. The footer’s paragraph should have class selector named “contact”.


Here is the code I write to add the style to the html file:  

```
/*
   Filename: styles.css

   Author: Xin Huang
   Date: 09/27/2017
   External css file for lab 3
   */

   h1 {
       background-color: orangered;
       text-align: center;
   }

   article {
       text-align: center;
   }

   footer {
       background-color: green;
       color: white;
   }

   .contact {
       text-align: right;
   }
```

After the file is deployed to ITU server, I am able to browse it using the link:
<http://dblab.itu.edu:82/xhuand93887/Lab3/external_css.html>  

![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab3/3.png)

##LAB VALIDATION:
Validate the CSS below using <http://jigsaw.w3.org/css-validator/>. If the validation tool shows no comments on the validity of the CSS code, copy it into a new text document and save it. Make a few changes to the syntax of the style rules included in the copied code, and then validate the edited style sheet. How did the changes impact the validity of the CSS code?

Example of using <https://validator.w3.org/> to validate the result:
![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab3/4.png)

Example of using <http://jigsaw.w3.org/css-validator/> to validate the result:
![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab3/5.png)




