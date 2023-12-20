const input = document.querySelector(".color-input");
const box = document.querySelector(".color-box");

input.addEventListener("change", function() {
box.Style.backgroundColor = input.value;
});