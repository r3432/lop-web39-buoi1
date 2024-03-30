console.log("---------------")
console.log("bai1");
function somax(arr){
  if(arr.length==0){
    return undefined;
  }
  let max=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}
const kq=[1,2,3,4,5,9,0];
console.log(somax(kq));

console.log("---------------")
console.log("bai2");

function somin(arr){
  if(arr.length==0){
    return undefined;
  }
  let min=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}
const kq1=[10,2,3,4,5,9];
console.log(somin(kq1));

console.log("---------------")
console.log("bai3");

function sodu(arr){
  var kq2=[];
  for (let i=0;i<arr.length;i++){
    var m=arr[i]%2;
    kq2.push(m);
  }
  return kq2;
}

var mang=[4,8,7,3,10,5];
console.log(sodu(mang));

console.log("---------------")
console.log("bai4");
function saochep(chuoi){
  return Array(10).fill(chuoi).join('');
}

var a="hello";
console.log(saochep(a));


console.log("--------------")
console.log("bai5");

function saochep1(chuoi1){
  return Array(10).fill(chuoi1).join('-');
}

var b="hello";
console.log(saochep1(b));