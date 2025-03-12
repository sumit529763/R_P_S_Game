function rndm() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

function fun(user_choice) {
  let cmp_Choice = rndm();
  let ele1 = document.getElementById("user_display");
  let ele2 = document.getElementById("computer_display");
  let ele3 = document.getElementById("result");
  let user_score = document.getElementById("user_score");
  let computer_score = document.getElementById("computer_score");

  let user = parseInt(user_score.innerText);
  let cmp = parseInt(computer_score.innerText);

  if (user_choice === cmp_Choice) {
    ele3.innerHTML = "Draw";
  } else if (
    (user_choice === "rock" && cmp_Choice === "scissor") ||
    (user_choice === "paper" && cmp_Choice === "rock") ||
    (user_choice === "scissor" && cmp_Choice === "paper")
  ) {
    ele3.innerHTML = "You Win";
    user += 1;
    user_score.innerHTML = user;
  } else {
    ele3.innerHTML = "Computer Wins";
    cmp += 1;
    computer_score.innerHTML = cmp;
  }
  animate(user_choice, cmp_Choice);
}

function animate(user_choice, cmp_Choice) {
  let ele1 = document.getElementById("user_display");
  let ele2 = document.getElementById("computer_display");


  ele1.classList.remove("shake");
  ele2.classList.remove("shake");


  ele1.classList.add("shake");
  ele2.classList.add("shake");


  ele1.addEventListener("animationend", function changeUserImage() {
    ele1.classList.remove("shake"); 
    ele1.src = `${user_choice}.png`;
    ele1.removeEventListener("animationend", changeUserImage);
  });

   
  ele2.addEventListener("animationend", function changeComputerImage() {
    ele2.classList.remove("shake");
    ele2.src = `${cmp_Choice}.png`;
    ele2.removeEventListener("animationend", changeComputerImage);
  });
}
