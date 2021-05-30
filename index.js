// First dice
var randomNumber1=Math.round((Math.random()*5)+1);
var img="images/dice"+randomNumber1+".png";
document.getElementById("img1").setAttribute("src",img);
// second dice
var randomNumber2=Math.floor((Math.random()*5)+1);
var img="images/dice"+randomNumber2+".png";
document.getElementById("img2").setAttribute("src",img);
// condition
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent="Draw!";
}
else{
  document.querySelector("h1").textContent="Refresh Again!";
}
