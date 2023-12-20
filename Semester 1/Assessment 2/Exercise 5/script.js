document.querySelector(".button-container");
document.addEventListener("click", function(event) {
    alert('You clicked a button ${event.target.innertext}');
});