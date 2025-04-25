const dark = document.querySelector("div.littlebell");
dark.addEventListener("click", (e) => {
  if (dark.style.transform === "rotate(0deg)") {
    dark.style.transform = "rotate(180deg)";
    dark.style.filter = "brightness(0)  ";
  } else {
    dark.style.transform = "rotate(0deg)";
    dark.style.filter = "brightness(0) invert(1)";
  }
  dark.style.transition = "transform 0.3s ease";
});

function switchToDark() {}
