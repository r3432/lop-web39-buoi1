function show(cardIndex) {
  var detailUrl;
  if (cardIndex === 1) {
    detailUrl = 'detail.html?cardIndex=' + cardIndex;
  } else if (cardIndex === 2) {
    detailUrl = 'detail2.html?cardIndex=' + cardIndex;
  } else if (cardIndex === 3) {
    detailUrl = 'detail3.html?cardIndex=' + cardIndex;
  } else if (cardIndex === 4) {
    detailUrl = 'detail4.html?cardIndex=' + cardIndex;
  } else if (cardIndex === 5) {
    detailUrl = 'detail5.html?cardIndex=' + cardIndex;
  } else if (cardIndex === 6) {
    detailUrl = 'detail6.html?cardIndex=' + cardIndex;
  } else {
    // Xử lý khi không có trang chi tiết tương ứng
    alert('Không tìm thấy trang chi tiết cho card này.');
    return;
  }
  window.location.href = detailUrl;
}
