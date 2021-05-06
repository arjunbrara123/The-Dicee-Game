p1 = Math.floor(Math.random() * 5 + 1);
p2 = Math.floor(Math.random() * 5 + 1);
document.querySelector(".img1").src = "images/dice" + p1 + ".png"
document.querySelector(".img2").src = "images/dice" + p2 + ".png"
if (p1 == p2) {
  document.querySelector("h1").innerHTML = "Draw!"
} else if (p1 > p2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (p1 < p2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
