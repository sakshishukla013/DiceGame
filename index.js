//generate various dice numbers from 0 - 6
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
//adding the png according to the number generated
var randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
//changing the src attribute from image tag of both of the dices
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
//checking which dice is greater and changing the inner html
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Tie🚩"
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
