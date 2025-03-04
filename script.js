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

  // Set the images dynamically
  ele1.src = `${user_choice}.png`;
  ele2.src = `${cmp_Choice}.png`;

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

  animate();
}

function animate() {
  let ele1 = document.getElementById("user_display");
  let ele2 = document.getElementById("computer_display");

  ele1.style.animation = "none";
  ele2.style.animation = "none";

  setTimeout(() => {
    ele1.style.animation = "user_scale 2s";
    ele2.style.animation = "computer_scale 2s";
  }, 10);
}