function doiCtoF() {
  var doC=parseFloat(prompt("Nhap do C:"))
  var doF = (doC * 9 / 5) + 32; 
  return doF;
}


var ketqua = doiCtoF();
console.log("Giá trị độ F tương ứng là: " + ketqua);
