let input = document.getElementById("numberInpurt");
let inputBtn = document.getElementById("checkBtN:");
let result = document.getElementById("result");
function isprime(input){
if(input.value === "" || isNaN(input.value)){
    result.innerHTML = "please enter valid number";
    return;
}
if(input.value < 2){
    result.innerHTML= "please enter number more than one";
    return;
}
else{
    for(i = 2 ; i< input.value/2 ; i++){
        if(input.value % 2==0){
            result.innerHTML=`${input.value} is not a prime number`;
            return ;
        }
        
    }
    result.innerHTML = `${input.value} is a prime number`;
    return;
}
}
inputBtn.addEventListener("click" ,isprime());