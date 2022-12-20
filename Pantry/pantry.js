const container = document.querySelector(".container");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const button = document.querySelector(".button");

function tabs(e){
    const id = e.target.dataset.id;
    /*이벤트 타켓의 */
        btns.forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        content.forEach(element => {
            element.classList.remove("active");
        });
        content.forEach(element => {
            if(element.id == id)
            {
                element.classList.add("active");
            }
        });
    
};

button.addEventListener("click", tabs);
//클릭하면 실행이라 괄호x

