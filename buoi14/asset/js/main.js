let para2=document.createElement("p");
para2.innerHTML="doan van nnnn";
console.log(para2);

document.querySelector(".box-1").appendChild(para2);


let para3=document.createElement("i");
console.log(para3);
para3.innerHTML="duong anh linh";
document.querySelector(".box-1").appendChild(para3);


// let para4=document.createElement("h2");
// console.log(para4);

// para4.innerHTML="duong anh";

// let box1=document.querySelector(".box-1").appendChild(box1);

// document.body.insertBefore(para4,box1);




let parent1=document.querySelector("h3");
let parent_title=document.querySelector(".box-2");
console.log(parent1);
console.log(parent_title);

let title=document.createElement("h1");
console.log(title);

title.textContent="d linh";

parent_title.replaceChild(title,parent1)
