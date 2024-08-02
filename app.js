let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turno=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       
        if(turno){
            box.style.color="green"; 
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 & pos2==pos3){
                showWinner(pos1);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
