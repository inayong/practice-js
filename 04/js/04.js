document.addEventListener("DOMContentLoaded", () => {

});

const dice = () => {
    const adiv = document.querySelector("#adiv");
    let n = Math.floor(Math.random() * 6) + 1;
    
    console.log(n);
    
    // if (n === 1) adiv.innerHTML = "<img src='./images/1.png'>";
    // else if (n === 2) adiv.innerHTML = "<img src='./images/2.png'>";
    // else if (n === 3) adiv.innerHTML = "<img src='./images/3.png'>";
    // else if (n === 4) adiv.innerHTML = "<img src='./images/4.png'>";
    // else if (n === 5) adiv.innerHTML = "<img src='./images/5.png'>";
    // else if (n === 6) adiv.innerHTML = "<img src='./images/6.png'>";

    adiv.innerHTML = `<img src='./images/${n}.png'>`;
}