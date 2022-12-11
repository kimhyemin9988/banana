const loginFormJ = document.querySelector("#loginForm");
const loginBoxJ = loginFormJ.querySelector("input");
const NaTa = document.querySelector("h1");
//input의 첫번째를 가져옴
const HIDDEN_KEY = "hidden"
const USERNAME_KEY = "username";
//string이 반복되는 경우

function firstFuntion(event)
{   event.preventDefault();
    const username = loginBoxJ.value;
    //loginBoxJ에 input된것이 username임
    console.log(username);
    localStorage.setItem(USERNAME_KEY,"hyemin");
    loginFormJ.classList.add(HIDDEN_KEY);
    paintGreetings(savedUsername);
}

function paintGreetings(username){
    NaTa.innerHTML ="성공" + username;
    NaTa.classList.remove(HIDDEN_KEY);
}
//form자체를 가져옴!

const savedUsername = localStorage.getItem(USERNAME_KEY);
//저장된 username을 저장하는 변수

if(savedUsername === null){
    loginFormJ.classList.remove(HIDDEN_KEY);
    loginFormJ.addEventListener("submit", firstFuntion);
    //show the form

}
else{
    //hidden form and show NaTa
    paintGreetings(savedUsername);
}