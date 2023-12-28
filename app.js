let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
        let item = document.createElement("li");
        item.classList.add("list-group-item");
        item.innerText = inp.value;
        
       

        let del = document.createElement("button");
        del.innerText = "Delete";
        del.classList.add("delete");
        item.appendChild(del);
        ul.appendChild(item);
       

    inp.value ="";
})

ul.addEventListener("click", function(event){
       if (event.target.nodeName== "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
       }
})