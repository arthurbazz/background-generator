let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
const btn = document.querySelector("button");


const colorGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    // css background rgb
    css.textContent = body.style.background;
    // btn color on the first page load
    btn.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
}

// generating randon numbers
const rnd = () => {
    return (Math.floor(Math.random() * 255));
}

// genrating randomColors
const rndColors = () => {
    const rndCol1 = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
    const rndCol2 = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
    // displaying randomColors 
    document.body.style.background = `linear-gradient(to right, ${rndCol1}, ${rndCol2})`;
    // btn color with random color generated
    btn.style.background = `linear-gradient(to left, ${rndCol1}, ${rndCol2})`;
    // input random colors
    color1.style.background = rndCol1;
    color2.style.background = rndCol2;
    // css background rgb
    css.textContent = body.style.background;
}

color1.addEventListener("input", colorGradient); 
color2.addEventListener("input", colorGradient);
//Write code so that the colour inputs match the background generated on the first page load.
window.addEventListener("load", colorGradient);
// Add a random button which generates two random numbers for the colour inputs.
btn.addEventListener("click", rndColors);

  