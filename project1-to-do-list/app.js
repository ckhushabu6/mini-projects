const search = document.getElementById("search");
const listcontainer = document.getElementById("list-container");
// function addlist(){
//     if(search.value === ''){
//         alert(" You must write something ...!");
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = search.value;
//         listcontainer.appendChild(li);
//         li.style.listStyleType="none";
//         let span = document.createElement("span");
//         span.innerHTML = "&#10060;";
//         span.style.marginLeft="225px";
//         let radio  = document.createElement("btn");
//         radio.type = "button";
//         li.appendChild(radio);
//         li.appendChild(span);

//         span.addEventListener("click" , function(){
//             li.innerHTML="";
//         });

//     }
//     search.value = "";
// }
function addlist(){
    if(search.value === ''){
        alert("You must write something ...!");
    } else {
        let li = document.createElement("li");
        li.style.listStyleType="none";

        // ✅ Complete Button
        let completeBtn = document.createElement("button");
        completeBtn.innerText = "✓";
        completeBtn.style.marginRight = "4px";
        completeBtn.addEventListener("click", function(){
            li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
            li.style.color = li.style.color === "gray" ? "black" : "gray";
        });

        // Task text
        let taskText = document.createElement("span");
        taskText.innerText = search.value;

        // ❌ Delete Button (tumhara span use karke)
        let span = document.createElement("span");
        span.innerHTML = "&#10060;";
        span.style.marginLeft="20%";
        span.addEventListener("click" , function(){
            li.remove();
        });

        // Sab ko li me add karo
        li.appendChild(completeBtn);
        li.appendChild(taskText);
        li.appendChild(span);

        listcontainer.appendChild(li);
    }
    search.value = "";
}
