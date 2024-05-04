fetch('https://cool2fun.github.io/admanager.js')
  .then(response => response.text())
  .then(adCode => {
    // Đã nhận được mã quảng cáo, hiển thị nó trên trang web B
    eval(adCode); // Thực thi mã JavaScript để hiển thị quảng cáo
  })
  .catch(error => {
    console.error('Lỗi khi tải quảng cáo:', error);
  });