const todoForm = document.querySelector("#todoForm");
//querySelector는 id인지 class인지 명시해줘야한다.
const todoV = document.querySelector("#todoForm input");
//form input
const todoList = document.querySelector("#todo-list");
//ul
let arrayTodo = [];
//배열
const TODOS_KEY = "todos";


function removeLi(event){
    const removeliv =event.target.parentElement;
    //부모요소인 li을
    removeliv.remove();
    //지운다
    arrayTodo=arrayTodo.filter((item)=>{return item.id !== parseInt(removeliv.id);});
    //처음 배열에서 필터된것을 다시 그 처음의 배열로 넣는다.
    //처음배열의 id와 지워진 아이디를 하나씩 비교해서 같은것이 있다면 그것을 빼고 return한다.
    setTodos(arrayTodo);
    //지웠으니까 배열의 값을 다시 저장한다!!!!!!!!!
    //text에서 string으로 바꿔주면서 localStorage에 저장해준다.
}
function addLi(newTodoObj){ // localstorage안에 있는 "text" <-배열화됨.
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    //임시 text????
    //todoV에 저장된 값인 todoValue가 interText에 들어가야함.
    li.id = newTodoObj.id;
    //html의 li에 객체의 id가 넣어짐
    const button = document.createElement("button");
    //button도 목록이 생성되면 같이 생성
    //html tag라 ""
    button.innerText = "❌";
    button.addEventListener("click", removeLi);
    //button에서 click이 일어나면
    //함수 내부에 선언되었으므로 함수 내부에 넣는다
    li.appendChild(span);
    //li의 첫번째 span
    li.appendChild(button);
    //span의 버튼인데
    todoList.appendChild(li);
    //ul에 li 더하기 <-순서대로 차례로 해야해서 appendChild
}
function FirstFunction(event){
    event.preventDefault();
    const todoValue =todoV.value;
    //input의 value를 todoValue에 저장
    const newTodoObj ={
        text: todoValue,
        id: Date.now()
    };
    arrayTodo.push(newTodoObj);
    //새로운 값이 입력될때마다 그 값(텍스트)를 배열에 넣기
    //(배열이름).push(todo입력변수=값);
    //배열의 메서드
    addLi(newTodoObj);
    //목록이 제출되면 (제출된 값을 넣어!)밑의 리스트를 생성해야 하기때문에
    setTodos(arrayTodo);
    //여기까지 저장
    todoV.value="";
    //enter하면 값이 todoV폼 자체롤 !! 새로고침됨
}

todoForm.addEventListener("submit", FirstFunction);
//submit 같음 주의#input이 아니라 form자체가 submit되야함


function setTodos(arrayTodo){
    localStorage.setItem(TODOS_KEY, JSON.stringify(arrayTodo));
    //지울때,더할때마다 자동 작동
}

const StorageSaved=localStorage.getItem(TODOS_KEY);

if (StorageSaved !== null)
{
    const parseTo = JSON.parse(StorageSaved);
    parseTo.forEach(Element => addLi(Element));
}
//새로고침을 할때마다 + 지울때마다 if함수는 자동 작동
