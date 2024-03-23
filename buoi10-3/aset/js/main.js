function tinhbmi(canNang,chieuCao){
  var canNang=parseFloat(prompt("Nhap can nang"));
  var chieuCao=parseFloat(prompt("Nhap chieu cao"));
var cCao=chieuCao/100;
var bmi=canNang/(cCao*chieuCao);
bmi = bmi.toFixed(2);
return bmi;
}
var ketqua=tinhbmi();
console.log("chi so cua ban :"+ ketqua);