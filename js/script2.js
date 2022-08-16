const play = document.querySelector(".play");
const output = document.querySelector(".output");
let money1 = document.querySelector(".money1");
let money2 = document.querySelector(".money2");
const replay = document.querySelector(".btn-success");
const main = document.querySelector(".main");
const proceed = document.querySelector(".proceed");
const name = document.querySelector(".name");
const first = document.querySelector(".first");
const welcomeText = document.querySelector(".welcome-text");
const selectAvatar = document.querySelector(".select-avatar");

let avatarOutput = document.querySelector(".avatar-output");
let avatarOutput2 = document.querySelector(".avatar-output2");

let diceOutput = document.querySelector(".dice-output");
let diceOutput2 = document.querySelector(".dice-output2");

let moneyCount1 = 200;
let moneyCount2 = 200;

money1.textContent = `N${moneyCount1}`;
money1.classList.add("btn", "text-center", "btn-dark");

money2.textContent = `N${moneyCount2}`;
money2.classList.add("btn", "text-center", "btn-dark");

proceed.addEventListener("click", () => {
  if(!name.value) {
    alert("Enter Name")
  } else if (!selectAvatar.value) {
    alert("Choose Character")
  } else {
    const characters = ["Aang", "Zuko", "Korra", "Azula"];
    // const computerCharacter = characters[Math.floor(Math.random() * characters.length)];

    function computerCharacter(){
      return characters[Math.floor(Math.random() * characters.length)];
    }

    const x = computerCharacter();
    
    first.style.display = "none"
    main.style.display = "block"
    play.style.visibility = "visible"
    welcomeText.innerHTML = `Hello ${name.value}, How good are your hands.`

    if (selectAvatar.value === "Aang") {
      avatarOutput.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/Avatar_Aang.png" style="width: 100%;" />
          <div class="avatar-name">
            <p>Avatar Aang</p>
          </div>
        </div>
      </div>
    `
    }

    if (selectAvatar.value === "Zuko") {
      avatarOutput.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/Prince_Zuko.jpg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Prince Zuko</p>
          </div>
        </div>
      </div>
    `
    }

    if (selectAvatar.value === "Korra") {
      avatarOutput.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/korra.jpeg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Avatar Korra</p>
          </div>
        </div>
      </div>
    `
    }

    if (selectAvatar.value === "Azula") {
      avatarOutput.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/azula.jpeg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Princess Azula</p>
          </div>
        </div>
      </div>
    `
    }

    if (x === "Aang") {
      avatarOutput2.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/Avatar_Aang.png" style="width: 100%;" />
          <div class="avatar-name">
            <p>Avatar Aang</p>
          </div>
        </div>
      </div>
    `
    }

    if (x === "Zuko") {
      avatarOutput2.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/Prince_Zuko.jpg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Prince Zuko</p>
          </div>
        </div>
      </div>
    `
    }

    if (x === "Korra") {
      avatarOutput2.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/korra.jpeg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Avatar Korra</p>
          </div>
        </div>
      </div>
    `
    }

    if (x === "Azula") {
      avatarOutput2.innerHTML = `
      <div class="col-md-3">
        <div class="polaroid">
          <img src="image/azula.jpeg" style="width: 100%;" />
          <div class="avatar-name">
            <p>Princess Azula</p>
          </div>
        </div>
      </div>
    `
    }
  }
})

play.addEventListener("click", () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const computerNum = numbers[Math.floor(Math.random() * numbers.length)];
  const playerNum = numbers[Math.floor(Math.random() * numbers.length)];

  if (playerNum === 1) {
    diceOutput.innerHTML = `<img src="image/dice-one.png"/>`;
  }
  if (playerNum === 2) {
    diceOutput.innerHTML = `<img src="image/dice-two.png"/>`;
  }
  if (playerNum === 3) {
    diceOutput.innerHTML = `<img src="image/dice-three.png"/>`;
  }
  if (playerNum === 4) {
    diceOutput.innerHTML = `<img src="image/dice-four.png"/>`;
  }
  if (playerNum === 5) {
    diceOutput.innerHTML = `<img src="image/dice-five.png" />`;
  }
  if (playerNum === 6) {
    diceOutput.innerHTML = `<img src="image/dice-six.png" />`;
  }

  if (computerNum === 1) {
    diceOutput2.innerHTML = `<img src="image/dice-one.png"/>`;
  }
  if (computerNum === 2) {
    diceOutput2.innerHTML = `<img src="image/dice-two.png"/>`;
  }
  if (computerNum === 3) {
    diceOutput2.innerHTML = `<img src="image/dice-three.png"/>`;
  }
  if (computerNum === 4) {
    diceOutput2.innerHTML = `<img src="image/dice-four.png"/>`;
  }
  if (computerNum === 5) {
    diceOutput2.innerHTML = `<img src="image/dice-five.png" />`;
  }
  if (computerNum === 6) {
    diceOutput2.innerHTML = `<img src="image/dice-six.png" />`;
  }

  if (computerNum > playerNum) {
    moneyCount1 -= 50;
    moneyCount2 += 50;

    money1.textContent = `N${moneyCount1}`;
    money2.textContent = `N${moneyCount2}`;

    output.innerHTML = `
      <h6>Player: ${playerNum}</h6>
      <h6>Computer: ${computerNum}</h6>
      <h5>You Lose</h5>
    `;
  } else if (playerNum > computerNum) {
    moneyCount1 += 50;
    moneyCount2 -= 50;

    money1.textContent = `N${moneyCount1}`;
    money2.textContent = `N${moneyCount2}`;

    output.innerHTML = `
      <h6>Player: ${playerNum}</h6>
      <h6>Computer: ${computerNum}</h6>
      <h5>You Won</h5>
    `;
  } else {
    output.innerHTML = `
      <h6>Player: ${playerNum}</h6>
      <h6>Computer: ${computerNum}</h6>
      <h5>It's a Tie</h5>
    `;
  }

  if (moneyCount2 === 0) {
    alert(`Nice one ${name.value}. You won all computer's money`);
    play.style.display = "none";
    replay.style.display = "block";
    replay.onclick = () => {
      location.reload();
    };
  }
  if (moneyCount1 === 0) {
    alert(`Sorry ${name.value}. You Lost! Computer got away with all your money`);
    play.style.display = "none";
    replay.style.display = "block";
    replay.onclick = () => {
      location.reload();
    };
  }
});
