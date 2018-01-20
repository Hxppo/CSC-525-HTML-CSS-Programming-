#LAB 4: Layout
##Introduction
You’re assigned as a web developer of your team and your company hired a web designer. The web designer drew a template for you to follow. Your job is to code the design using CSS. The name of the CSS is style_lab.css. An html (eatwell.html) content is provided for you already—you don’t have to change it. The only thing you have to change is the style_lab.css. It is a challenge but it’s easy to code if you understand the layout.

Requirements:   
1.	The background of the body is silver.  
2.	The background of the header is olive.
3.	The color of the header is floralwhite.  
4.	The background of the article is floralwhite.  
5.	Modify the style_lab.css (ONLY the properties and values should be added. Don’t change anything.) to reflect the image below. It does not have to be perfect, but give the best you can.

Here is the code I write to add the css file:

```css
/*
   Eating Well in Season style sheet
   Filename: style_lab.css

   Author: Your Name
   Date: Date
 */

/* reset styles */
article, body, div, footer, header, h1, h2, p {
   border: 0;
   padding: 0;
   margin: 0;
}

/* body and page container */
body {
	background-color: silver;
}

.container {
/*	max-width: 1000px;*/
}

/* headings */
header {
	background-color: olive;
	color: floralwhite;
	text-align: left;
}


/* position container */
.positioncontainer {

}

/* main content */
article {
	background-color: floralwhite;
	float: left;
	clear: left;
}

article h2 {
	background-color: lightskyblue;
	padding-top: 10px;
	padding-bottom: 10px;
}

/* sidebar */
aside {
	color: black;
	text-align: left;
	background-color: gold;
	padding-bottom: 26px;
}

/* footer section */
footer {
	background-color: olive;
	color: floralwhite;
	text-align: right;
	clear: both;
}

```

After the file is deployed to ITU server, I am able to browse it using the link:
<http://dblab.itu.edu:82/xhuand93887/Lab4/Lab4.html>

![image](/Users/xinhuang/Google Drive/CSC 525 HTML:CSS Programming /Labs/Lab4/1.png)








