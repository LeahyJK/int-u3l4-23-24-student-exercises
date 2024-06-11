let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does? Changes the text in the header
// - What do you think .src does? changes the image being displayed


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = 7;
    img.src = "https://avatars.githubusercontent.com/u/171827755?v=4"
});


