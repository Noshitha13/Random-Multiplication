
const num1= Math.ceil(Math.random()*100);
const num2= Math.ceil(Math.random()*100);
const quest=document.getElementById("question");
const input1=document.getElementById('input')
const form1=document.getElementById('form');
const score1=document.getElementById("score");
const sc=document.getElementById('reseet');
let score=JSON.parse(sessionStorage.getItem("score"));
if(!score)
{
    score=0;
}
score1.innerText=`score:${score}`
quest.innerText=`what is ${num1} multiply by ${num2}?`;
const correct=num1*num2;
form1.addEventListener("submit",()=>{
    const userAns=+input1.value
    if(userAns==correct){
        score++
        updatelocalstorage()
    }
    else{
        score--
        updatelocalstorage()
    }

});
function updatelocalstorage(){
    sessionStorage.setItem("score",JSON.stringify(score))
}
