//Background Color Changer//

const defaultColor = document.getElementById("default-Bg")

const btn1 = document.getElementById("btn1")




function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + hex.padStart(6, "0")
}


btn1.addEventListener("click",(e) => {

 const newColor = getRandomHexColor();
  defaultColor.style.backgroundColor = newColor;
  hexNum1.textContent = newColor;


})