function chia(so){
if(so %3 == 0 && so % 5 ==0){
  console.log("FizzBuzz");
}
else if(so %3 == 0 ){
  console.log("Fizz");
}
else if(so % 5 ==0){
  console.log("Buzz");
}
else{
console.log(so);
}
}
var so=parseInt(prompt("nhap so"));
chia(so);