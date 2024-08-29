const lamp = document.getElementById("lamp");
const titleText = document.querySelector(".title");
const btnSaklar = document.querySelector("#btn-saklar");

btnSaklar.addEventListener("click", () => {
  const on = lamp.classList.toggle("on");

  if (on != "") {
    titleText.classList.add("active");
    lamp.src = "assets/image/on.png";
    btnSaklar.innerHTML = "off";
  } else {
    titleText.classList.remove("active");
    lamp.src = "assets/image/off.png";
    btnSaklar.innerHTML = "on";
  }
});
