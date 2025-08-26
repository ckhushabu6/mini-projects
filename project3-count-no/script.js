/* <h1 id="count">0</h1>
    <div>
        <button id="increment"></button>
        <button id="decrement"></button>
        <button id="reset"></button> */
        
let countEl = document.getElementById("count");
let increment = document.getElementById("increment");
let derement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let count = 0 ; 
increment.addEventListener("click", ()=>{
    count++;
    countEl.innerText = count;
});
decrement.addEventListener("click", ()=>{
    count--;
    countEl.innerText = count;
});
reset.addEventListener("click", ()=>{
    count = 0 ; 
    countEl.innerText = count;
});