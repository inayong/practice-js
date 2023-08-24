/* 
// function 키워드로 함수 생성
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ah1").innerHTML = "Hello JavaScript!" ;
}) ;  

function hello() {
    console.log("Hello JS!") ;
}
*/

// 화살표 함수
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ah1").innerHTML = "Hello JavaScript!" ;
});

const hello = () => {
    console.log("Hello JS!") ;
}