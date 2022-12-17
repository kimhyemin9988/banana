//continue click누르면 새로고침 없이 밑의 대시보드로 이동
//<ul class="actions"> 안의<li><a>
//eventlisner("click"), preventEvent 이용

//<div class="container">
//<ul>=>img 대시보드 누르면 이미지 변경, 새로고침 없이

const list = document.querySelector(".container li:first-child");
const noti = document.querySelector(".container li:nth-child(2)");
const celsius = document.querySelector(".container li:last-child");
//대시보드 가져오기

function addClass(event){
    const addLi =event.target.children[0];
    //이벤트 타깃 요소를
    addLi.classList.replace("hidden","addClass");
    //class이름을 더한다.
    if(addLi === listImg)
    {
            if(notiImg.className == 'addClass') //두번째거가 숨겨져 있지 않다면
        {
            notiImg.classList.replace("addClass","hidden"); //숨긴다
        }

        if(celsiusImg.className == 'addClass')//세번째거가 숨겨져 있지 않다면
        {
            celsiusImg.classList.replace("addClass","hidden"); //숨긴다
        }
    }

    if(addLi === notiImg)
    {
            if(listImg.className == 'addClass') //첫번째거가 숨겨져 있지 않다면
        {
            listImg.classList.replace("addClass","hidden"); //숨긴다
        }

        if(celsiusImg.className == 'addClass')//세번째거가 숨겨져 있지 않다면
        {
            celsiusImg.classList.replace("addClass","hidden"); //숨긴다
        }
    }
    if(addLi === celsiusImg)
    {
            if(listImg.className == 'addClass') //첫번째거가 숨겨져 있지 않다면
        {
            listImg.classList.replace("addClass","hidden"); //숨긴다
        }

        if(notiImg.className == 'addClass')//두번째거가 숨겨져 있지 않다면
        {
            notiImg.classList.replace("addClass","hidden"); //숨긴다
        }
    }
}
/*click하면*/


list.addEventListener("click", addClass);
noti.addEventListener("click", addClass);
celsius.addEventListener("click", addClass);

const listImg = list.children[0];
const notiImg = noti.children[0];
const celsiusImg = celsius.children[0];
