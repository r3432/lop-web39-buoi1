
console.log("-------------------");
console.log("bai 1");
function ktchuoi(chuoiCha,chuoiCon){
  return chuoiCha.includes(chuoiCon);
}

var chuoiCha="duong anh linh";
var chuoiCon="anh linh";
var kq=ktchuoi(chuoiCha,chuoiCon);
console.log(kq);

var chuoiCon="alinh";
var kq2=ktchuoi(chuoiCha,chuoiCon);
console.log(kq2);

console.log("-------------------");
console.log("bai 2");
function rutnganChuoi(chuoi){
  if(chuoi.length<=8){
    return chuoi;
  }
  else{
    return chuoi.slice(0,8)+"...";
  }
}
var chuoi1="duong anh linh";
var chuoi2="duong an";
console.log( rutnganChuoi(chuoi1));
console.log( rutnganChuoi(chuoi2));

console.log("-------------------");
console.log("bai 3");
function chuoidx(chuoi){
  chuoi=chuoi.toLowerCase().replace(/\s/g, '');
  var dodai=chuoi.length;
  for(var i=0;i<dodai/2;i++){
    if(chuoi[i]!==chuoi[dodai-i-1]){
      return false;
    }
  }
  return true;
}

var kq="linh da";
var kq2="dal  lad";
console.log(chuoidx(kq));
console.log(chuoidx(kq2));

console.log("-------------------");
console.log("bai 4");
 
function sxep(songuyen){
  chuyenmang=songuyen.toString().split('').map(Number);
  chuyenmang.sort((a,b)=>a-b);
  var vtridau=chuyenmang.findIndex(digit =>digit!=0);
  if (vtridau === -1) {
    return songuyen;
  }
  var temp=chuyenmang[0];
  chuyenmang[0]=chuyenmang[vtridau];
  chuyenmang[vtridau]=temp;
  var kq3=parseInt(chuyenmang.join(''));

  return kq3;
}

console.log(sxep(9074451));

console.log("-------------------");
console.log("bai 5");
function Case(str) {
 
  var snakeCase = str.replace(/[A-Z]/g, match => '_' + match.toLowerCase()).toLowerCase();
  

  snakeCase = snakeCase.replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  

  if (snakeCase.startsWith('_')) {
      snakeCase = snakeCase.substring(1);
  }
  
  return snakeCase;
}


var kq4= "duong anh linh";
console.log(Case(kq4)); 
