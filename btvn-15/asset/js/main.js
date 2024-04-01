console.log("bai 1");
function sort1(arr){
  return arr.sort((a,b)=>{
    return b.localeCompare(a);
  });
}

const sxep=sort1(['Nam','Tuan','Hoa']);
console.log(sxep);

console.log("-------------------------");
console.log("bai 2");

function shuffer(arr1){
  for( let i=arr1.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr1[i],arr1[j]]= [arr1[j],arr1[i]];
  }
  return arr1;
}

const arr2=[1,2,4,7,9];
const kq=shuffer(arr2);
console.log(kq);



console.log("-------------------------");
console.log("bai 3");

function kotrung(arr1,arr3){
  const unique=[];
  const tatcaarr=new Set([...arr1,...arr3]);
  tatcaarr.forEach(element => {
    if(!arr1.includes(element) && !arr2.includes(element)){
      unique.push(element)
    }

  });
  return unique;
}

const arr1=[1,2,5,9,7];
const arr3=[0,2,4,6,8];
const kq3=kotrung(arr1,arr3);
console.log(kq3);


console.log("-------------------------");
console.log("bai 4");
function getUniqueElements(arr11, arr12) {
  const combinedArray = arr11.concat(arr12);
 
  const elementCount = new Map();
  combinedArray.forEach(element => {
      const count = elementCount.get(element) || 0;
      elementCount.set(element, count + 1);
  });


  const uniqueElements = [];
  elementCount.forEach((count, element) => {
      if (count === 1) {
          uniqueElements.push(element);
      }
  });

  return uniqueElements;
}


const arr11 = [1, 2, 3, 4, 5];
const arr12 = [3, 4, 5, 6, 7];
const uniqueElements = getUniqueElements(arr11, arr12);
console.log(uniqueElements); 
