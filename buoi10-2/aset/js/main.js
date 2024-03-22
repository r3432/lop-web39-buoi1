console.log("giai :pt ax+b=0")
function pt(a,b){
  if(a==0){
    if(b==0){
      console.log("phuong trinh vo so nghiem");
    }
    else{
      console.log("phuong trinh vo  nghiem");
    }
  }else{
    var x=- b / a;
    console.log("Phuong trinh co nghiem:x",x);
  }
}
pt(0,9);
pt(2,8);
pt(0,0);
console.log("-------------------------------------")
console.log("giai :pt ax^2+bx+c=0")


function ptb2(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                console.log("phuong trinh vo so nghiem");
            } else {
                console.log("phuong trinh vo  nghiem");
            }
        } else {
            var x = -c / b;
            console.log("phuong trinh co 1 nghiem: x =", x);
        }
    } else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log("phuong trinh vo nghiem");
        } else if (delta === 0) {
            var x = -b / (2 * a);
            console.log("phuong trinh nghiem kep: x =", x);
        } else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("phuong trinh co 2 nghiem phgan biet:");
            console.log("x1 =", x1);
            console.log("x2 =", x2);
        }
    }
}

// Thử nghiệm với một số hệ số a, b, c bất kỳ


ptb2(0,0,0);
ptb2(2,10,9);
ptb2(1,-2,1);
ptb2(0,5,3);
