var l= document.querySelectorAll(".drum").length;
for( var i=0; i<l;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    
}
function handleClick()
{
    var v= this.innerHTML;
    sound(v);
    addAnimation(v);
}
document.addEventListener('keydown', logKey);

function logKey(e) {
  var s=e.key;
  sound(s);
  addAnimation(s);
}
function sound(s){
  switch(s)
    {
        case 'w':
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 's':
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
                var audio= new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
        case 'j':
                var audio= new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
        case 'k':
               var audio= new Audio('sounds/kick-bass.mp3');
               audio.play();
               break;
        case 'l':
               var audio= new Audio('sounds/tom-1.mp3');
               audio.play();
               break;
    }
}

function addAnimation(b)
{
    var q=document.querySelector("."+b);
    var g = q.getAttribute("class");
    q.setAttribute("class", g + " pressed");
    setTimeout(function fun(){q.setAttribute("class",g);},1000);
}
