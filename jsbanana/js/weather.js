//html과 상관없이 console창에만 띄울예정
const KEY_API = "380c6b824663125f3b18e416664940f6";


function onWeather(position){ //현재 위치가 있으면

        const lati = position.coords.latitude;
        const longti = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longti}&appid=${KEY_API}&units=metric`;
        fetch(url).then(Response => Response.json()).then(data => {
            const currentWeather = data.weather[0].main;
            console.log(currentWeather)});//링크를 통해 보여지는 text전부!가 Response.json()
}   //배열 wather의 0번째 요소중에 id가 main
function errorWeather()
{
    console.log("error!");
}





navigator.geolocation.getCurrentPosition(onWeather, errorWeather);
// 함수가 함수를 불러오는 형태, 함수안에 if문이 아님
