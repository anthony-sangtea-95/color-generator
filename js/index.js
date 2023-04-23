const color_inputs = document.querySelectorAll(".color-inputs input");
const gradient_box = document.getElementById("gradient-box");
const select_dir = document.querySelector(".form-select");
const linear_color = document.querySelector(".linear-color");
const refresh_btn = document.querySelector(".refresh-btn");
const copy_btn = document.querySelector(".copy-btn");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if(isRandom){
        color_inputs[0].value = getRandomColor();
        color_inputs[1].value = getRandomColor();
    }
    const gradient = `linear-gradient(${select_dir.value}, ${color_inputs[0].value},${color_inputs[1].value})`;
    gradient_box.style.background = gradient;
    linear_color.textContent = `background:${gradient}`;
}

color_inputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});

const copyCode = () => {
    navigator.clipboard.writeText(linear_color.textContent);
    copy_btn.textContent = "Color Copied";
    setTimeout(()=>copy_btn.textContent="Copy Color", 1600);
}

select_dir.addEventListener("change",() => generateGradient(false));

refresh_btn.addEventListener("click", ()=>generateGradient(true));

copy_btn.addEventListener("click", copyCode);