let input = document.getElementById("numberInput");
let inputBtn = document.getElementById("checkBtN");
let result = document.getElementById("result");
function isprime(input){

    
    if(input.value.trim() === "" || isNaN(input.value)){
        result.innerHTML = "please enter valid number";
        return;
    }
    let num = Number(input.value);
    if(num < 2){
        result.innerHTML= "please enter number more than one";
        return;
    }
    else{
        for(let i = 2 ; i <= Math.sqrt(num) ; i++){
            if(num % i == 0){
                result.innerHTML=`${num} is not a prime number`;
                return ;
            }
            
        }
        
        result.innerHTML = `${num} is a prime number`;
    }
}
inputBtn.addEventListener("click", isprime);