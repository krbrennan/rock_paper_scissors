const p1_options = document.querySelectorAll(".option1");
const p2_options = document.querySelectorAll(".option2");

// const setTimeout = function() {
//
// }


p1_options.forEach (function(option) {
  option.addEventListener("click", handleMove);
});


function handleMove(event) {
  event.target.setAttribute("class", "enlarge");
  handleP2Move(event);

}

function handleP2Move(p1Selection) {
  let randomNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  // console.log(p2_options[randomNum]);
  p2_options[randomNum].setAttribute("class","enlarge");
  let p2Selection = p2_options[randomNum];
  judge(p1Selection, p2Selection);
}

function judge(p1, p2) {
  // console.log(p1);
  // console.log(p2);
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
  }
  return declareWinner(winner);
}

function declareWinner(winner) {
  // announce winner in 'score' div
  // give winner a star
  // reset style properties/state

  const winnerText = document.getElementById('winner-text');

  if (winner !== null) {
    winnerText.innerHTML = `${winner} wins!`;
  }
  console.log(winner);
}
