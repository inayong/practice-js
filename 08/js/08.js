const show = (cd) => {
    console.log(cd); 

    let url2 = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${cd}`; //클릭을 하면 show로 넘어감 cd값
    console.log(url2);

    const divDetail = document.querySelector(".detail");

    fetch(url2)
    .then((resp) => resp.json())
    .then(data => {
        console.log(data)

        let movieInfo = data.movieInfoResult.movieInfo;
        let detailTag = "";
        detailTag = detailTag + `<span class = 'title'>코드</span>`;
        detailTag = detailTag + `<span class = 'con'>${movieInfo.movieCd}</span>`;
        detailTag = detailTag + `<span class = 'title'>영화명</span>`;
        detailTag = detailTag + `<span class = 'con'>${movieInfo.movieNm}</span>`;
        divDetail.innerHTML = detailTag;
    })
    .catch((err) => console.log(err))
}

const getData = (dt, divCon, yn) => {
    console.log(dt.value);

    //데이터 가져오기
    let apikey = "f5eef3421c602c6cb7ea224104795888";
    let tDt = dt.value.replaceAll("-", "");
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    url = url + `?key=${apikey}`;
    url = url + `&targetDt=${tDt}`;

    console.log(url);
    console.log(yn.value);
    if(yn.value !== 'T') {
        url = url + `&multiMovieYn=${yn.value}`;
    }

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {// [[Prototype]]:Object
        let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        let conTag ="<table>";
        conTag = conTag + `<thead>
        <thead>
                <tr>
                  <th scope="col">순위</th>
                  <th scope="col">영화명</th>
                  <th scope="col">개봉일</th>
                  <th scope="col">매출액</th>
                  <th scope="col">누적매출액</th>
                  <th scope="col">관객수</th>
                  <th scope="col">누적관객수</th>
                  <th scope="col">스크린수</th>
                  <th scope="col">상영횟수</th>
                </tr>
            </thead>`;

        conTag = conTag + '<tbody>' ;

        for (let item of dailyBoxOfficeList) {
            conTag = conTag + '<tr>';
            conTag = conTag + `<td>${item.rank}</td>`;
            conTag = conTag + `<td><a href="#" onclick="show(${item.movieCd})">${item.movieNm}`;
            
            if (parseInt(item.rankInten) === 0) {
                conTag = conTag + `[-]`;
            } else if (parseInt(item.rankInten) > 0) {
                conTag = conTag + `[🔺${item.rankInten}]`;
            }
            else {
                conTag = conTag + `[🔻${item.rankInten}]`;
            }
            // conTag = conTag + ;
            conTag = conTag + `</a></td>`;
            conTag = conTag + `<td>${item.openDt}</td>`;
            conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</sapn><button id="bt">+</button><button id="bt">-</button></td>`;
            conTag = conTag + `<td><span class="numtd">${parseInt(item.salesAcc).toLocaleString('ko-KR')}</sapn></td>`;
            conTag = conTag + `<td><span class="numtd">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</sapn></td>`;
            conTag = conTag + `<td><span class="numtd">${parseInt(item.audiAcc).toLocaleString('ko-KR')}</sapn></td>`;
            conTag = conTag + `<td>${item.scrnCnt}</td>`;
            conTag = conTag + `<td>${item.showCnt}</td>`;
            conTag = conTag + `</tr>` ;
        }
        conTag = conTag + '</tbody>' ;
        conTag = conTag + '</table>';
        divCon.innerHTML = conTag;

        console.log(dailyBoxOfficeList);
    }) 
    .catch((err) => console.log(err)) //then에서 오류났을때 여기서 잡음
    ;
}

document.addEventListener("DOMContentLoaded", () => { //(컴포넌트)
    const dt = document.querySelector("#dt1"); //id로 => #dt1 or input[type=date]
    const divCon = document.querySelector("#divCon");
    const tb = document.querySelector("table[role=grid]");
   
    //날짜 변경시 날짜 가져오기 
    dt.addEventListener("change", () => { //change!
        console.log(dt.value); //input 타입일때는 value
        getData(dt, divCon, yn);
    });

    //영화구분
    yn.addEventListener("change", () => {
        if (dt.value) {
            getData(dt, divCon, yn);
            console.log(yn.value);

        }
    });
});