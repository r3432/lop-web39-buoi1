function updateSelectedOption(option) {
  var selectedOption = option.innerText;
  var dropdownButton = option.closest('.dropdown').querySelector('.dropbtn');
  dropdownButton.innerText = selectedOption;
  var dropdownContent = option.closest('.dropdown').querySelector('.dropdown-content');
  dropdownContent.style.display = 'none'; // Ẩn danh sách sau khi chọn
  dropdownContent.dataset.showDropdown = 'false'; // Gán thuộc tính cho biết danh sách đã được ẩn
}

function toggleDropdown(dropdown) {
  var dropdownContent = dropdown.querySelector('.dropdown-content');
  var currentStatus = dropdownContent.dataset.showDropdown;

  if (currentStatus === 'true') {
    dropdownContent.style.display = 'none'; thị
    dropdownContent.dataset.showDropdown = 'false'; 
  } else {
    dropdownContent.style.display = 'block'; 
    dropdownContent.dataset.showDropdown = 'true'; 
  }
}

function goToNextPage() {
  window.location.href = "index2.html";
}

function goToNextPage1() {
  window.location.href = "index3.html";
}
function go1() {
  window.location.href = "mien1.html";
}
function go2() {
  window.location.href = "mien2.html";
}

const inputField = document.getElementById('inputField');

inputField.addEventListener('focus', function() {
  this.placeholder = ''; 
});

inputField.addEventListener('blur', function() {
  if (!this.value) {
    this.placeholder = 'Ten doanh nghiep'; 
  }
});
