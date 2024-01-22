let boxes=document.querySelectorAll(".box");
let restBtn =document.querySelector("#ResetButton");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
] ;
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;

    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for (let pattern of winPatterns){
    let po1val= boxes[pattern[0]].innerText;
    let po2val= boxes[pattern[1]].innerText;
    let po3val= boxes[pattern[2]].innerText;

    if(po1val!=''&& po2val!='' && po3val !=''){
        if (po1val===po2val && po2val===po3val){

            showWinner(po1val);
        }
    }
    }

};
newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);
