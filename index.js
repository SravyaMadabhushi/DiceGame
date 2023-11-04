var randomNumber1=1;
randomNumber1=Math.ceil(Math.random(randomNumber1)*6);
console.log(Math.ceil(randomNumber1));
var randomImage= "dice"+randomNumber1+".png";
var randomSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomSource);

var randomNumber2=1;
randomNumber2=Math.ceil(Math.random(randomNumber2)*6);
console.log(Math.ceil(randomNumber2));
var randomImage2="images/"+"dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if(randomNumber1 > randomNumber2)
{
document.querySelector("h1").innerHTML="⛳️Player 1 Wins";
}
else if(randomNumber1 < randomNumber2)
{
document.querySelector("h1").innerHTML="⛳️Player 2 Wins";
}
else
{
document.querySelector("h1").innerHTML="⛳️Draw⛳️";
}
