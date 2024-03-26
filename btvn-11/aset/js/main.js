console.log("bai 1:");
function mark(diem){
  if(diem>=85){
    console.log("A");
  }
  else if(70 <= diem && diem < 85){
    console.log("B");
  }
  else if(40 <= diem && diem <70){
    console.log("C");
  }
  else{
    console.log("D");
  }
}

var so=mark(100);
var so=mark(50);
var so=mark(10);
var so=mark(80);


console.log("-------------------------");
console.log("bai 2");

function solon(a, b){
  if(a>b){
    
    console.log("gia tri lon hon la:",a);
  }
  else if(a<b){
    console.log(" gia tri lon hon la:",b );
  }
  else{
    console.log("bang nhau");
  }

} 
solon(5, 10);
solon(20, 5);
solon(10, 10);

console.log("-------------------------");
console.log("bai 3");

function solon(a){
  if(a>0){
    
    console.log("gia tri a la so duong:",a);
  }
  else if(a<0){
    console.log(" gia tri a so am:",a );
  }
  else{
    console.log("gia tri",a);
  }

} 
solon(5);
solon(-8);
solon(0);

console.log("-------------------------");
console.log("bai 4");

function ktso(a){
  if(a%2==0){
    
    console.log("gia tri a la so chan:",a);
  }
  else if(a%2!=0){
    console.log(" gia tri a la so le:",a );
  }
  else{
    console.log("gia tri",null);
  }

} 
ktso(10);
ktso(9);

console.log("-------------------------");
console.log("bai 5");

function chiahet(a){
  if(a%3==0 && a%5==0){
    
    console.log("so chia het cho ca 3 va 5 la:",a);
  }
  else if(a%3==0 && a%5!=0){
    console.log(" so chi chia het cho  3 la:",a );
  }
  else{
    console.log("so chi chia het cho 5 la:",a);
  }

} 

chiahet(15);
chiahet(5);
chiahet(3);
chiahet(75);

console.log("-------------------------");
console.log("bai 6");
function ktbang(a,b,c){
  if(c==a+b){
    
    console.log(c + " = " + a + " + " + b);
  }
  else if(c!=a+b){
    console.log(c + " != " + a + " + " + b);
  }
  else{
    console.log("het");
  }

} 
ktbang(4,2,2);
ktbang(0,2,2);
