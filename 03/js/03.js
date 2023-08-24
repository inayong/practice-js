document.addEventListener("DOMContentLoaded", () =>{
    const bt1 = document.querySelector("footer > div");
    // => const bt1 = document.getElementById("bt1");
    console.log(bt1);

    //const bt = document.querySelectorAll("footer > div > button");
    // const bt = document.querySelectorAll("button");
    const bt = document.querySelectorAll("footer button");
    console.log(bt);

    //변수 선언
    //기존 선언 방법
    console.log(x);
    var x = 10;
    console.log(x); //여기서 x 할당

    //최근 변수 선언 방법(호이스팅)
    // console.log(esx);
    let esx = 10;
    console.log(esx);

    //nodelist 순회
    //1. 전통적인 for
    console.log("1.전통적인 for");
    for(let i = 0; i < bt.length; i++) {
        console.log(bt[i]);
    }

    //2. for .. in : 키순회
    console.log("2. 키순회 for");
    for(let i in bt) {
        console.log(i, bt[i]);
    }

    // 3. arry 순회
    console.log("3. arry 순회");
    bt.forEach((i) => console.log(i));
    bt.forEach((i, idx) => console.log(idx, i));

    // 4. for .. of 순회
    console.log("4. for..of순회");
    for(let i of bt) {
        console.log(i);
    }

    for(let [idx, i] of bt.entries()) {
        console.log(idx, i);
    }

    console.log("버튼의 캡션 값 가져오기");
    let s = "<ul>";

    for(let i of bt) {
        s = s + "<li>" + i.getAtrribute("id") + ":" + i.textContent + "</li>" ;
    } 
    console.log(s);
    document.querySelector("#adiv").innerHTML = s + "</ul>";
    
})