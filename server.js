var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article ={
    
'article-one' : {
title: 'Article One | Rishab Jain',
heading: 'Article one',
date: 'Sep 2 2017',
content: ` 
<p>
Hello guys myself Rishab and i am trying to learn new things. It just like i am tryin to find a goal.
</p>
<p>
Ohk lets what i can do for it.

</p> `},
'article-two' : {
    title: 'Article Two | Rishab Jain',
heading: 'Article Two',
date: 'Sep 10 2017',
content: ` 
<p>
Hello guys myself Rishab and i am trying to learn new things. It just like i am tryin to find a goal.
</p>
<p>
Ohk lets what i can do for it.

</p> `
},
'article-three':{
    title: 'Article Three | Rishab Jain',
heading: 'Article Three',
date: 'Sep 12 2017',
content: ` 
<p>
Hello guys myself Rishab and i am trying to learn new things. It just like i am tryin to find a goal.
</p>
<p>
Ohk lets what i can do for it.

</p> `
}
};
function createtemp(data){
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 var template = 
     `<!DOCTYPE html>
<html>
    <head>
        <Title>
           ${title}
        </Title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
         
        <div>
            <a href="/">Home</a>
        </div>
    <hr />
     <div class="container">
    <h3>
        ${heading}
    </h3>
        <div>
            ${date}
        </div>
   <div>
       ${content}
   </div></div>
    </body>
</html>
`
 ;
 return template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req, res){
    var articlename= req.params.articlename;
   res.send(createtemp(article[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
