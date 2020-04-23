function playButton (){

  var randomNumber1 = (Math.random() * 6) + 1;
  randomNumber1 = Math.floor(randomNumber1);

  var randomNumber2 = (Math.random() * 6) + 1;
  randomNumber2 = Math.floor(randomNumber2);

  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<i class='fas fa-trophy fa-1x'></i> Player 1 Wins!";
    document.querySelector(".btn1").style.display = "inlineBlock";
  }
  else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "<i class='fas fa-trophy fa-1x'></i> Player 2 Wins!";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
  document.querySelector(".btn1").style.visibility = "visible";
}

function resetButton (){
  document.querySelector(".img1").setAttribute("src","");
  document.querySelector(".img2").setAttribute("src","");

  document.querySelector("h1").textContent = "Tap On Play Button!";
  document.querySelector(".btn1").style.visibility = "hidden";
}
