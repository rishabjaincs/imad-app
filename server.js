var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'Article One | Rishab Jain',
    heading: 'Article one',
    date: 'Sep 2 2017',
    content: ` 
    <p>
           Hello guys myself Rishab and i am trying to learn new things. It just like i am tryin to find a goal.
       </p>
       <p>
           Ohk lets what i can do for it.
           
       </p> `
};
function createtemp(data){
 var tilte = data.title;
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
app.get('/article-one',function(req, res){
   res.send(createtemp(articleone));
});
app.get('/article-two',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/article-two',function(req, res){
    res.send('Article two requested and will be served here');
});
app.get('/article-three',function(req, res){
    res.send('Article three requested and will be served here');
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
