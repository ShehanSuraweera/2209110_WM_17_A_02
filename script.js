let images = [
  "./images/dice-1.svg",
  "./images/dice-2.svg",
  "./images/dice-3.svg",
  "./images/dice-4.svg",
  "./images/dice-5.svg",
  "./images/dice-6.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
  function setVisibility(isvisible) {
    document.getElementById("cup").style.visibility = isvisible;
    document.getElementById("player-2").style.visibility = isvisible;
    document.getElementById("player-1").style.visibility = isvisible;
    document.getElementById("congtraz").style.visibility = isvisible;
    document.getElementById("winner").style.visibility = isvisible;
  }

  setVisibility("hidden");

  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    console.log(dieOneValue, dieTwoValue);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

    document.querySelector("#player-1").innerHTML =
      "Your rolll is " + (dieOneValue + 1);
    document.querySelector("#player-2").innerHTML =
      "Your rolll is " + (dieTwoValue + 1);
    document.getElementById("congtraz").style.visibility = "visible";
    setVisibility("visible");
    if (dieOneValue == dieTwoValue) {
      document.getElementById("congtraz").style.visibility = "hidden";
      document.getElementById("cup").style.visibility = "hidden";
      document.querySelector("#winner").innerHTML = "Game Draw! Role again...";
    } else if (dieOneValue < dieTwoValue) {
      document.querySelector("#winner").innerHTML = "Palyer 02 WON!";
    } else {
      document.querySelector("#winner").innerHTML = "Palyer 01 WON!";
    }
  }, 1500);
}
