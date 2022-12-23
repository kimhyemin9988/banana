const foodForm = document.querySelector(".foodForm");
const foodInput = document.querySelector(".foodInput");
const foodList = document.querySelector("#foodList");
let storedFood = JSON.parse(localStorage.getItem('food')); //배열이다
//const foodArray = [];

function inputFood(event)
{
    const foodValue = foodInput.value;
    event.preventDefault();
    const newFoodobj = {
        id:Date.now(),
        text:foodValue
    };
    addList(newFoodobj);
    //객체로 만든 다음에 넣기
    storedFood.push(newFoodobj);
    //배열에 넣기
    localStorage.setItem('food' , JSON.stringify(storedFood));
    foodInput.value="";
}

function removeLi(event){
    const removeValue =event.target.parentElement;
    removeValue.remove();
    storedFood = storedFood.filter(Element =>
        Element.id !== parseInt(removeValue.id));
        //storedFood전체에서 1개 지우면 => result반환
        //한번 더 지우면 지워진것이 아닌 원래에서 다시 지워진다 ㅠㅠㅠ
    localStorage.setItem('food' , JSON.stringify(storedFood));
}



function addList(newFoodobj){
    const li = document.createElement("li");
    li.id = newFoodobj.id;
    const ListText = newFoodobj.text;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = `${ListText}`;
    button.innerHTML = `Delete`;
    button.addEventListener("click", removeLi); 
    foodList.appendChild(li);
}


foodForm.addEventListener("submit", inputFood);

if(storedFood !== null)
{
    storedFood.forEach(element => addList(element)     
    );
}
