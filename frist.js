/*start my reusable functions (micro frame work) */
//delet htmlelement
function delet(x){
  x.parentNode.removeChild(x);//we will bring the parent then delet the element
  }
//collision function that detect collision between any two html element
function onCollision(c1,c2){
    if(c1.offsetTop<(c2.offsetTop+c2.offsetHeight)
    && c2.offsetTop<(c1.offsetTop+c1.offsetHeight)
    && c1.offsetLeft<(c2.offsetLeft+c2.offsetWidth)&&
       c2.offsetLeft<(c1.offsetLeft+c1.offsetWidth)){
           return true;}else{
           return false;}}
//function creat html elements it take the name and class and return the element           
function creatHtmlElemnt (elementName,className){
  var z=document.createElement(elementName);
  document.body.appendChild(z);
  z.classList.add(className);
  return z ;
}           
/*end my reusable functions (micro frame work) */

/*****/
var Basket= document.getElementById("theBasket");//the basket
var ground= document.getElementById("ground");//the ground
var Chicken1= document.getElementById("chicken1");//chicken1
var Chicken2= document.getElementById("chicken2");//chicken2
var Chicken3= document.getElementById("chicken3");//chicken3
var scor =document.getElementById("counter");//the scor
var lost =document.getElementById("lost");//the lost
/*****/

//basket move with curser in x axies
addEventListener("mousemove",function(e){
    Basket.style.left=e.clientX; });


//check for collision with basket
setInterval(collisionChecker,100);//iam checking the collision every 1 second

function collisionChecker(){
var y= document.getElementsByClassName("egg");
for(var i=0;i<y.length;i++){//checking the collision on all eggs in the sceen
    if(onCollision(Basket,y[i]))
   {
      takeAction(y[i]);//function to make action
   }
}}
//take action if collied with basket
var scorCounter=0;
function takeAction(endEgg)
{
  scorCounter +=1;
  scor.innerHTML=String(scorCounter);
  delet(endEgg);
}

//check for collision with ground
setInterval(collisionCheckerGround,100);

function collisionCheckerGround(){
var y= document.getElementsByClassName("egg");
for(var i=0;i<y.length;i++){
    if(onCollision(ground,y[i]))
   {
      
    negativeAction(y[i]);//to make negative action
   }
}}
//negative action if  collid with ground
var lostCounter=0;
function negativeAction(endEgg)
{
  lostCounter +=1;
  lost.innerHTML=String(lostCounter);
  showCrackedEgg(endEgg);//show cracked egg
  delet(endEgg);//delet the egg
  if(lostCounter>5){
    gameOver();
  }
}

//show cracked egg 
function showCrackedEgg(x){
  var z=creatHtmlElemnt("div","cracked-egg");
  z.style.left=x.offsetLeft;
  z.style.top=x.offsetTop;
  setTimeout(function(){delet(z);},100);//to disapper after 1 second
} 

/*start game over functions */

//game over
function gameOver(){
  //stop generation
  clearInterval(s1);
  clearInterval(s2);
  clearInterval(s3);
  //show game over screen
  gameOverScreen();
  //delet any egg exsit
  var z=document.getElementsByClassName("egg");
  for(var i=0;i<z.length;i++){
     delet(z[i]);
  }
}
//game over screen
function gameOverScreen(){
  var z=document.getElementById("gOver");
      z.style.display="block";
}
/*end game over functions */


//make it faster after 15 second
setTimeout(fasterGame,15000);
var faster=5;
function fasterGame(){
    faster -=2.5;
}


//to control the stop of the game
var s1;
var s2;
var s3;
//start the game
function startGame(){
//to avoid the delay 
eggGenerator1();
eggGenerator2();
eggGenerator3();
//generator trigger
s1=setInterval(eggGenerator1,3500);
s2=setInterval(eggGenerator2,2000);
s3=setInterval(eggGenerator3,2500);
delet(document.getElementById("start"));
}


/*start egg generatores*/
//generator1
function eggGenerator1(){
  var z =creatHtmlElemnt("div","egg");
  z.style.left=Chicken1.offsetLeft;
  z.style.transitionDuration=faster+"s";
  z.style.top="80vh";
}
//generator2
function eggGenerator2(){
  var z =creatHtmlElemnt("div","egg");
  z.style.left=Chicken2.offsetLeft;
  z.style.transitionDuration=faster+"s";
  z.style.top="80vh";
}
//generator3
function eggGenerator3(){
  var z =creatHtmlElemnt("div","egg");
  z.style.left=Chicken3.offsetLeft;
  z.style.transitionDuration=faster+"s";
  z.style.top="80vh";
}
/*end egg generatores*/






















/*
//don't care about this i was just write a nots to not forget 
// this out of test
var z =document.createElement("div");//how to creat HTML element
z.classList.add("mystyle");//how to add class to it 
document.body.appendChild(z);//make it child to body
*/
