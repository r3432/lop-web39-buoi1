let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* tro chuot menu main */

document.addEventListener("DOMContentLoaded", function() {
  // Lấy danh sách tất cả các phần tử vien1
  var vien1Elements = document.querySelectorAll('.vien1');

  // Lặp qua mỗi phần tử vien1
  vien1Elements.forEach(function(vien1) {
      // Lấy phần tử view-con1 liền kề của vien1
      var viewCon1 = vien1.nextElementSibling;

      // Nếu tồn tại phần tử view-con1
      if (viewCon1 && viewCon1.classList.contains('view-con1')) {
          // Sử dụng event listener để theo dõi sự kiện chuột rời khỏi vien1
          vien1.addEventListener('mouseleave', function() {
              // Thiết lập hiển thị của view-con1 thành block
              viewCon1.style.display = 'block';
          });

          // Sử dụng event listener để theo dõi sự kiện chuột rời khỏi view-con1
          viewCon1.addEventListener('mouseleave', function() {
              // Thiết lập hiển thị của view-con1 thành none
              viewCon1.style.display = 'none';
          });
      }
  });
});

