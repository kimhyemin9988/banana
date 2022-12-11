const clock = document.querySelector("#clock");


function timeFuntion(){
    const data = new Date(); //지금 시간을 가져와서 data에 저장한다.
    const presentHours = String(data.getHours()).padStart(2,"0");
    const presentMinute = String(data.getMinutes()).padStart(2,"0");
    const presentSecound = String(data.getSeconds()).padStart(2,"0");
    //String한것의 자리수를 확인하는 것으로 String밖에다 붙여야함.
    
    clock.innerText=`${presentHours}:${presentMinute}:${presentSecound}`;
    //id clock에 있는 내부 text를 가져온다
    //clock.padStart(2,"0"); (오답) -> 각각 함수마다 적용

}

timeFuntion(); //함수를 이렇게 호출해야 사용됨!
setInterval(timeFuntion, 1000); //함수를 호출해서 사용하는것
//함수를 1초에 한번씩 가져온다
