// Tạo phần tử script để chèn mã AdSense
const adScript = document.createElement('script');
adScript.async = true;
adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

// Chèn phần tử script vào đầu phần tử <head>
document.head.appendChild(adScript);

// Tạo phần tử quảng cáo AdSense
const adContainer = document.getElementById('ad-container');
const adElement = document.createElement('ins');
adElement.className = "adsbygoogle";
adElement.style.display = "block";
adElement.setAttribute('data-ad-client', 'ca-pub-6556788076088846');
adElement.setAttribute('data-ad-slot', '9406916186');

// Chèn phần tử quảng cáo vào trang
adContainer.appendChild(adElement);

// Khởi tạo quảng cáo AdSense
(adsbygoogle = window.adsbygoogle || []).push({});
