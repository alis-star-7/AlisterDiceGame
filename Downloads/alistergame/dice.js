
function gameFunction(){
var array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1 =Math.floor( Math.random()*array.length);
var image1 = array[randomNumber1];
var randomNumber2 =Math.floor( Math.random()*array.length);
var image2 = array[randomNumber2];
document.querySelector("#diee1").setAttribute("src",image1);
document.querySelector("#die2").setAttribute("src",image2);

if(randomNumber1>randomNumber2){
    document.querySelector('.heading').innerHTML="Alister WON !!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector('.heading').innerHTML="You WON !!"
}
else{
    document.querySelector('.heading').innerHTML="!! DRAW !!"
}
}
