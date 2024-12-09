// Tạo file analytics.js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-1K13710C7L', {
    'send_page_view': true,
    'cookie_domain': 'cool2fun.github.io',
    'cookie_flags': 'SameSite=None;Secure',
    'page_title': document.title,
    'page_location': window.location.href
});

// Thêm các hàm tracking khác...
const Analytics = {
    trackGameStart: function(gameName) {...},
    trackGameComplete: function(gameName, score) {...},
    // ... các hàm khác
};