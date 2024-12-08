// File: ads.js
const adCodes = {
     ad970x250: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846" crossorigin="anonymous"></script>
                 <ins class="adsbygoogle" style="display:inline-block;width:970px;height:250px" data-ad-client="ca-pub-6556788076088846" data-ad-slot="7979200749"></ins>
                 <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`,
     ad300x250: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846" crossorigin="anonymous"></script>
                 <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6556788076088846" data-ad-slot="9406916186"></ins>
                 <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`,
     ad728x90: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846" crossorigin="anonymous"></script>
                <ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6556788076088846" data-ad-slot="5424355442"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`
 };
 
 function insertAds() {
     const adContainers = {
         '.ad-970x250': 'ad970x250',
         '.ad-300x250': 'ad300x250',
         '.ad-728x90': 'ad728x90'
     };
 
     for (const [selector, adCode] of Object.entries(adContainers)) {
         const container = document.querySelector(selector);
         if (container) {
             container.innerHTML = adCodes[adCode];
         }
     }
 }
 
 // Gọi hàm insertAds khi trang đã tải xong
 document.addEventListener('DOMContentLoaded', insertAds);