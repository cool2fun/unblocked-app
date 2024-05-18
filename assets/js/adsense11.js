document.addEventListener('DOMContentLoaded', (event) => {
    // Kiểm tra xem container cho quảng cáo có tồn tại không
    const adContainer = document.getElementById('ad-adsense1');
    if (adContainer) {
        const adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.async = true;
        adScript.onload = function() {
            const adSlot = document.createElement('ins');
            adSlot.className = 'adsbygoogle';
            adSlot.style.display = 'block';
            adSlot.style.width = '970px';   // Thiết lập kích thước quảng cáo
            adSlot.style.height = '250px';
            adSlot.setAttribute('data-ad-client', 'ca-pub-6556788076088846');
            adSlot.setAttribute('data-ad-slot', '7979200749');

            adContainer.appendChild(adSlot);

            (adsbygoogle = window.adsbygoogle || []).push({});
        };
        document.head.appendChild(adScript);
    }
});