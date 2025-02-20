//--1--
const btn = document.querySelector(".button");
const input = document.querySelector(".input-text");

btn.addEventListener("click", function () {
  btn.innerHTML = input.value;
});

//--2--
const img = (document.querySelector(".first-img").src = "../second.jpg");

//--3--
const link = (document.querySelector(".link__to-img").href =
  "https://www.linkedin.com/pulse/what-difference-between-picture-photo-photoshopexpert/");
const img2 = document.querySelector(".second-img");
console.log(img2);
const changeImg = (img2.alt = "center which appears plane");
console.log(changeImg);
