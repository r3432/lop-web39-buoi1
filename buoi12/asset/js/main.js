// let user={}
//   user.name="linh";
//   user.email="linh";

//   console.log(user);


//   let user1={
//     name:"duong linh",
//     email:"gmail.com"
//   } 

//   console.log(user1);

//   let name1=user1.name;
//   let name2=user1.email;

  // console.log(name1);

//   let user2={
//     name:"duong linh",
//     email:"gmail.com",
//     age:25
//   } ;
// user2.name="anh";
// user2.email="linh@gmail.com"
// user2.addre="ninhbinh";
// console.log(user2)
// // cac phuong thuc lam viec trong map
// let arrnumber=[1,2,3,4,5] ;

// arrnumber.map((value,index) =>{
// console.log(value);
// console.log(index);
// })

let oddnumber=[11,12,13,14,15];
// let ketqua=[];
// oddnumber.forEach((item,index)=>{
// if((item%2)!=0){
// console.log("so le",item);
// ketqua.push(item);
// }
// } );

// console.log(ketqua)

//  const luu= oddnumber.filter((item,index) => {
// console.log(item);
// return (item%2)!=0;
// })
// console.log(luu);

// const luu= oddnumber.filter((item,index) => (item%2!=0))

// let number=[1,2,3,4,5];

// const tong= number.reduce((total,value)=>{
// // console.log(total);
// return total=total+value;
// },0);
// console.log(tong);

let arr=[1,2,3,4,5];
const kq=arr.find((value,index)=>{
return value > 4
});

console.log(kq);