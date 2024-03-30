// let title=document.getElementById("title");
// console.log("title")

// title.style.color='red'



// let t=document.getElementsByClassName('title-2');
// console.log(t)


// let a=document.getElementsByTagName("h3");
// console.log(a);
// a[0].style.color='blue'
// a[1].style.color='green'


// let c=document.querySelector("#title-0");

// console.log(c)

// let d=document.querySelector(".para");

// console.log(d);
// let e=document.querySelectorAll(".para1");

// console.log(e)

// let f=document.querySelector(".box-1");
// console.log(f.parentNode)

const data=[
  {
    name:"quan ao dep",
    src:"https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/2_13.jpg"
  },
  {
    name:"ao fong",
    src:"https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/2_13.jpg"
  },
  {
    name:"quan dai ",
    src:"https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/2_13.jpg"
  },
{
  name:"quan ao dai linh ",
  src:"https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/2_13.jpg"
}
]

console.log(data);

let row=document.querySelector(".row-js");
let HTML=``;
data.forEach((value) => {
  
HTML +=`
<div class="column coulumn-4">
        <div class="box-image">
<img src="https://mcdn2.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/2_13.jpg">
        </div>
        <div class="box-content">
          <h3>${value.name}</h3>
        </div>
      </div>
      `;

});

console.log(HTML);
row.innerHTML=HTML;