// Khai báo các biến global
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

// Định nghĩa quảng cáo
googletag.cmd.push(function() {
  // Định nghĩa kích thước quảng cáo và vị trí quảng cáo
  var slot = googletag.defineSlot('/23136362493/300x250', [300,250], 'div-gpt-ad-1714831630941-0').addService(googletag.pubads());
  
  // Kích hoạt dịch vụ quảng cáo
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();

  // Hiển thị quảng cáo
  googletag.display('div-gpt-ad-1714831630941-0');
});