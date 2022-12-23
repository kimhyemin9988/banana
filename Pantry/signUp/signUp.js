const signUpBox = document.querySelector("#signUpBox");
const signUpForm = document.querySelector(".signUpForm");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPw = document.querySelector("#signUpPw");
const signUpName = document.querySelector("#signUpName");
const signUpBtn = document.querySelector(".signUpbtn");
//비밀번호랑 재확인이랑 같아야 제출 가능
//회원가입 정보와 로그인 연동은 firebase배워야 될듯
const nextSubmit = document.querySelector("p");

function submitFunction(event){
    event.preventDefault();
    const localEmail= signUpEmail.value;
    const localPw = signUpPw.value;
    const localName = signUpName.value;
    localStorage.setItem('id', localEmail);
    localStorage.setItem('pw', localPw);
    localStorage.setItem('name', localName);
    signUpBox.classList.add("hidden");
    nextSubmit.classList.remove("hidden");
    nextSubmit.classList.add("block");
    nextSubmit.innerText = `hello ${localName}`;

    
}

signUpForm.addEventListener("submit", submitFunction);