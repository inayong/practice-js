document.addEventListener("DOMContentLoaded", () => {
    // // 6개버튼 가져오기
    // const bts = document.querySelectorAll("button");
    // bts.forEach((item) => {
    //     item.addEventListener("click", () => {
    //         // 문자를 숫자로 변환
    //         dice2(parseInt(item.textContent));
    //     });
    // });

    // 확인 버튼 가져오기
    const bt = document.querySelector("button");
    const radios = document.querySelectorAll("input[type=ridio]");
    bt.addEventListener("click", () => {
        for (let item of radios) {
            if (item.checked) {
                console.log(item.value);
                dice2(parseInt(item.value));
                //forEach()는 break구문 사용안됨
                break;
            }
        }
    });
});

//주사위 보기
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

// 버튼 클릭시 주사위 보기
const dice2 = (seln) => {
    //주사위 숫자 1~6
    let n = Math.floor(Math.random() * 6) + 1;

    //주사위 이미지 넣을 위치
    // const adiv = document.getElementById("adiv");
    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src='./images/${n}.png'>`;

    // 결과 출력을 위한 위치
    const h2 = document.querySelector("hgroup > h2"); //계층으로 찾기
    // h2.style.color = "red";
    if ( n === seln) {
        h2.textContent = "맞음(승)";
        h2.style.color = "blue";
    }
    else {
        h2.textContent = "틀림(패)";
        h2.style.color = "red";
    };
}