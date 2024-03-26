console.log("bai 1");
function saochep(chuoi){
let saox10='';
for(let i=0;i<10;i++){
  saox10+=chuoi;
}
return saox10;
}
let bandau="linh";
let saox10=saochep(bandau);
console.log(saox10);


console.log("-------------------------");
console.log("bai 2");
function saochepn(chuoi){
  let saox10n='';
  for(let i=0;i<10;i++){
    saox10n+="-"+chuoi;
  }
  return saox10n;
  }
  let bandaun="anh";
  let saox10n=saochepn(bandaun);
  console.log(saox10n);


console.log("-------------------------");
console.log("bai 3");
function saochep1(chuoi,n){
  let saox10=chuoi;
  for(let i=1;i<n;i++){
    saox10+="-"+chuoi;
  }
  return saox10;
  }
  let chuoibd="a";
  let solansao=5;
  let ketqua=saochep1(chuoibd,solansao);
  console.log(ketqua);

  console.log("-------------------------");
console.log("bai 4");
function tinhtongchia5(){
  let tong=0;
  for(let i=0;i<=100;i++){
    if(i%5==0){
      tong+=i;
    }
  }
  return tong;
}
let tong=tinhtongchia5();
console.log("tong chia het cho 5",tong);

console.log("-------------------------");
console.log("bai 5");
function thetich(bankinh){
  if(bankinh<0){
    return "ko xac dinh";
  };
let v=(4/3)*Math.PI* Math.pow(bankinh,3);
return v.toFixed(2);
}
let bankinh=4;
let v=thetich(bankinh);
console.log("the tich hinh tron la:",v);

console.log("-------------------------");
console.log("bai 6");
function tinhtongkc(soa,sob){
let min=Math.min(soa,sob);
let max=Math.max(soa,sob);
let tongn=0;
for(let i=min+1;i<max;i++){
  tongn+=i;  /* tong=0+1,tong=1+2=3 ,*/
}
return tongn;
}
let soa=3;
let sob=8;
let tongn=tinhtongkc(soa,sob);
console.log("tong khoang cach 2 so "+"("+soa+","+sob +") la:",tongn);

console.log("-------------------------");
console.log("bai 7");

function ktsonguyen(an){
if(an==2){
  return true;
}
if(an<=0 && an%2==0){
  return false;
}
for(let i=3;i<Math.sqrt(an);i=i+2){
  if(an%i==0){
    return false;
  }
}
return true;
}
let ketquan=19;
let ketquan1=15;
console.log(ketquan,"la so nguyen to:",ktsonguyen(17));
console.log(ketquan1,"la so nguyen to:",ktsonguyen(15));

console.log("-------------------------");
console.log("bai 8");
function laSoNguyenTo(number) {
  if (number <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false;
      }
  }
  return true;
}

function tinhTongSoNguyenTo(n) {
  let tong = 0;
  for (let i = 2; i <= n; i++) {
      if (laSoNguyenTo(i)) {
          tong += i;
      }
  }
  return tong;
}

let ket1 = 19;
let ket2 = 13;
console.log(ket1, "tong so nguyen to:", tinhTongSoNguyenTo(ket1));
console.log(ket2, "tong so nguyen to:", tinhTongSoNguyenTo(ket2));



console.log("-------------------------");
console.log("bai 9");
function tinhTongUocSo(number) {
 
  let tong = 0;


  for (let i = 1; i <= Math.sqrt(number); i++) {
    
      if (number % i === 0) {
        
          tong += i;
        
          if (i !== Math.sqrt(number)) {
              tong += number / i;
          }
      }
  }

  return tong;
}


let soNguyenDuong = 12;
console.log("tong cac uoc so cua", soNguyenDuong, "la:", tinhTongUocSo(soNguyenDuong));
