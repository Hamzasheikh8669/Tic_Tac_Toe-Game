
let boxes = document.querySelectorAll(".Box")
let resetBtn = document.querySelector("#reset_btn")
let new_btn = document.querySelector("#New_btn")
let msgContainer = document.querySelector(".msg_container")
let msg = document.querySelector("#msg")


let turnO = true
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
]
const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
     
        if(turnO){
            //playerO
            box.innerText = "O"
            turnO = false;
        }else{
            // playerX
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
};
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
};
const checkWinner = ( () =>{
    const showWinner = (winner) => {
        msg.innerText = `Congratulation winner is ${winner}`
        msgContainer.classList.remove("hide")
        disabledBoxes()
    }
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        
if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val)
    }
        
    }
})

new_btn.addEventListener("click" , resetGame)
resetBtn.addEventListener("click" , resetGame)