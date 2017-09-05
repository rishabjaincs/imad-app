console.log('Loaded!');
// change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML='New Value';
var image = document.getElementById('madi');

var marginLeft=0;
function marginRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
image.onclick = function(){
    var interval = setInterval(moveRight, 100);
    
};
