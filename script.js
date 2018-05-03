const p1_options = document.querySelectorAll(".option1");
// const p1_options = document.querySelectorAll(".imgs");
const p2_options = document.querySelectorAll(".option2");


p1_options.forEach (function(option) {
  option.addEventListener("click", handleMove);
  // console.log(option);
  // option.addEventListener("transitionend", removeTransition);
});


function handleMove(event) {
  // console.log(event);
  // This is not needed...send p1 selected move to handleP2Move
  event.target.setAttribute("class", "enlarge");
  handleP2Move(event);
}

function handleP2Move(p1Selection) {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  p2_options[randomNum].setAttribute("class", "enlarge");
  // console.log(p1Selection);
  let p2Selection = p2_options[randomNum];
  judge(p1Selection, p2Selection);
}

function judge(p1, p2) {
  let p1Move = p1.target.id;
  let p2Move = p2.id;
  let winner = null;

  if (p1Move === 'p1_r') {
    switch (p2Move) {
      case 'p2Scissors':
        winner = "Player 1";
        break;
      case 'p2Paper':
        winner = "Player 2";
        break;
      case 'p2Rock':
        break;
    }
  } else if (p1Move === 'p1_p') {
      switch (p2Move) {
        case 'p2Rock':
          winner = "Player 1";
          break;
        case 'p2Paper':
          break;
        case 'p2Scissors':
          winner = "Player 2";
          break;
      }
  } else if (p1Move === 'p1_s') {
      switch (p2Move) {
        case 'p2Rock':
          winner = 'Player 2';
          break;
        case 'p2Paper':
          winner = 'Player 1';
          break;
        case 'p2Scissors':
          break;
      }
  }
  return declareWinner(winner);
}

function declareWinner(winner) {
  // announce winner in 'score' div
  const winnerText = document.getElementById('winner-text');
  // console.log(winner)
  if (winner !== null) {
    winnerText.innerHTML = `${winner} wins!`;
  } else {
    winnerText.innerHTML = 'Tie!!!';
  }
  // increase winner amt
  increaseScore(winner);
  // reset the bolded selection

}

function increaseScore(winner) {
  let p1Score = document.getElementById("numWins1");
  let p2Score = document.getElementById("numWins2");

  switch (winner) {
    case 'Player 1':
      p1Score.innerHTML ++;
      break;
    case 'Player 2':
      p2Score.innerHTML ++;
      break;
  }
}


p1_options.forEach(option => option.addEventListener("transitionend", removeTransition));
p2_options.forEach(option => option.addEventListener("transitionend", removeTransition));


function removeTransition (e) {
  // e.stopPropagation();
  if (e.propertyName !== 'transform'){
    // console.log(e);

    e.target.classList.remove('enlarge', 1000);
  }
}
