const quotes =[
{    
    quote: "중요한 것은 꺾이지 않는 마음",
    author: "붉은 악마",
},
{
    quote: "고등학교 별거 없네. 마치 자전거 타기 같았어. 그냥 자전거에 불이 붙었고 도로에도 불이 붙었고 그냥 싹 다 불구덩이였을 뿐이지. 지옥이니까.",
    author: "조나단 부스",
},
{
    quote: "어째하여 아침인데 노랑등불 달고 나오셨나요, 달맞이꽃",
    author: "나태주",
},
{
    quote: "자연스럽게 만두 추가",
    author: "자만추 만두",
},

];

const quoteA = document.querySelector("#quote span:first-child");
//span의 첫번째
const authorA = document.querySelector("#quote span:last-child");
//span의 두번째

const count = quotes[Math.floor(Math.random() *(quotes.length))];

//0~3의 랜덤한 수가 quotes[0], quotes[1]...계속 실행됨.
//Math.random() <-괄호를 붙여서 새로고침할때마다 자동으로 실행됨

quoteA.innerText = count.quote;
authorA.innerText = count.author;

//key값 실행할때 걍 (배열이 저장된 변수).(key값)  (배열이 저장된 변수).(value) 하면 실행됨
//innerText =하면 변경됨.
//길이알고싶으면 (배열이름).length하면 됨.
