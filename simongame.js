 let color=["pink","yellow","green","blue"];
let gameseq=[];
let userseq=[];
let start=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false)
    {
        console.log("Game is Start..!")
        start=true;
        levelUp();
    }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp()
{
    userseq=[];
    level++;
    console.log(`Level:${level}`);
    h2.innerText=`Level:${level}`;

    let btnIndex = Math.floor(Math.random() * 4);
    let randomColor = color[btnIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    
    btnFlash(randomBtn);
    gameseq.push(randomColor);
    console.log(gameseq);

}
function check(idx){
   
    if(userseq[idx]===gameseq[idx])
    {
       if(userseq.length==gameseq.length)
       {
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over!<br><b>YOUR SCORE IS:${level} </b><br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }
}
function btnpress(){
   
    let btn=this;
    userFlash(btn);
    let btncolor= btn.getAttribute("id");
    userseq.push(btncolor);
    check(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}
function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    start=false;
}