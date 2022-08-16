const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
let money1 = document.querySelector(".money1");
let money2 = document.querySelector(".money2");

let moneyCount1 = 500;
let moneyCount2 = 500;

money1.textContent = `N${moneyCount1}`;
money1.classList.add("btn", "text-center", "btn-dark");

money2.textContent = `N${moneyCount2}`;
money2.classList.add("btn", "text-center", "btn-dark");

btn.addEventListener("click", () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const computerNum1 = numbers[Math.floor(Math.random() * numbers.length)];
  const playerNum1 = numbers[Math.floor(Math.random() * numbers.length)];
  const computerNum2 = numbers[Math.floor(Math.random() * numbers.length)];
  const playerNum2 = numbers[Math.floor(Math.random() * numbers.length)];

  // console.log(`${computerNum1} and ${computerNum2}`);
  // console.log(`${playerNum1} and ${playerNum2}`);

  const computerNum = computerNum1 + computerNum2;
  const playerNum = playerNum1 + playerNum2;

  // console.log(computerNum);
  // console.log(playerNum);

  if (computerNum > playerNum) {
    moneyCount1 += 50;
    moneyCount2 -= 50;

    money1.textContent = `N${moneyCount1}`;
    money2.textContent = `N${moneyCount2}`;

    output.innerHTML = `
      <h6>Computer: ${computerNum1} and ${computerNum2}</h6>
      <h6>Player: ${playerNum1} and ${playerNum2}</h6>
      <h5>You Lose</h5>
    `;
  } else if (playerNum > computerNum) {
    moneyCount1 -= 50;
    moneyCount2 += 50;

    money1.textContent = `N${moneyCount1}`;
    money2.textContent = `N${moneyCount2}`;

    output.innerHTML = `
      <h6>Computer: ${computerNum1} and ${computerNum2}</h6>
      <h6>Player: ${playerNum1} and ${playerNum2}</h6>
      <h5>You Won</h5>
    `;
  } else {
    output.innerHTML = `
      <h6>Computer: ${computerNum1} and ${computerNum2}</h6>
      <h6>Player: ${playerNum1} and ${playerNum2}</h6>
      <h5>It's a Tie</h5>
    `;
  }

  if (moneyCount1 === 0) {
    alert("You won all computer's money");
    location.reload();
  }
  if (moneyCount2 === 0) {
    alert("You Lost! Computer got away with all your money");
    location.reload();
  }
});
