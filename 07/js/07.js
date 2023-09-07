//전역변수
//하트와 폭탄의 위치를 결정하는 배열
//하트 = 0, 폭탄 = 1
let arr = [0,0,0,0,0,0,0,0,1] ; //적어도 하나는 1이있어야함

//폭탄섞기 확인용 플래그
let flag = true; //아직 폭탄 안섞임 d이상태여야 섞임

//눌러진 박스 수
let cnt = 0;


//초기화
const init = (boxs) => {
    //변수 초기화
    flag = true;
    cnt = 0;
    //박스 숫자 초기화
    boxs.forEach(e => {
        let n = e.getAttribute("id").slice(-1); // 속성값가져옴근데.slice(-1)이면 마지막글자가져온다는뜻
        console.log(n); 
        e.textContent = n;
        
    });
};

document.addEventListener("DOMContentLoaded", () => {
    //몇번박스인지 알아보기
    //컴포넌트 가져오기
    const boxs = document.querySelectorAll(".num > div");
    const bt = document.querySelector("button");
    const h2 = document.querySelector("h2");


    //초기화
    // init(boxs);


    //폭탄섞기 버튼처리
    bt.addEventListener('click', () => {
        //flag 변수 확인
        if (flag) {
            //배열 suffule
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);

            init(boxs);//폭탄섞기 초기화
            h2.textContent = '폭탄을 피해 선택해 주세요.'
            h2.style.color = 'blue';

            flag = false; //폭탄 안섞기게
        }
    });

    // 박스 클릭 처리 flag가 false되어있어야 버튼이 눌리게 처리해야함
    boxs.forEach(e => {
        e.addEventListener('click', () => {
            //폭탄섞기가 되지 않았을 경우
        if (flag) {
            h2.textContent = '폭탄을 섞어주세요.'
            h2.style.color = 'purple';
            return;
        }

        let idx = parseInt(e.textContent);
        //이미지가 이미 있는 경우는 처리안함
        if (isNaN(idx)) return;

        //해당 위치의 숫자가 0인지 1인지 확인
        if (arr[idx-1] === 0) {
            //하트
            e.innerHTML = '<img src="./image/hart.png">';
            cnt++;

            //성공처리
            if (cnt === 8) {
                h2.textContent = '성공!!'
                h2.style.color = 'green';   
                flag = false;

                idx = arr.indexOf(1);
                console.log(idx);

                document.getElementById("box" + (idx+1)).innerHTML = '<img src="./image/hart.png">';
                // document.querySelector("#box" + (idx+1)).innerHTML = '<img src="./image/hart.png">';

                // init(boxs);
            }
        } 
        else {
            //폭탄
            e.innerHTML = '<img src="./image/boom.png" width="90%">';
            h2.textContent = '!실패!'
            h2.style.color = 'orange';
            flag = true; //안눌러지게
        }

            console.log(e.textContent);
        });
    });
    

});