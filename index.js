var randomvariable1;
randomvariable1=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+randomvariable1+".png");
var randomvariable2;
randomvariable2=Math.ceil(Math.random()*6);
document.querySelector(".img2").setAttribute("src","images/dice"+randomvariable2+".png");
if(randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML=("Player 1 wins!");
}
if(randomvariable1===randomvariable2){
    document.querySelector("h1").innerHTML=("It is a draw. Roll again!");
}
if(randomvariable1<randomvariable2){
    document.querySelector("h1").innerHTML=("Player 2 wins!");
}