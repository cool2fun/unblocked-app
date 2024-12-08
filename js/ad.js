// File: ads.js
const adCodes = {
    ad970x250: `<div style="width:970px;height:250px;background-color:#ddd;display:flex;justify-content:center;align-items:center;">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846"
     crossorigin="anonymous"></script>
<!-- 970x250 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:970px;height:250px"
     data-ad-client="ca-pub-6556788076088846"
     data-ad-slot="7979200749"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </div>`,
    ad300x250: `<div style="width:300px;height:250px;background-color:#ddd;display:flex;justify-content:center;align-items:center;">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846"
     crossorigin="anonymous"></script>
<!-- 300x250 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-6556788076088846"
     data-ad-slot="9406916186"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </div>`,
    ad728x90: `<div style="width:728px;height:90px;background-color:#ddd;display:flex;justify-content:center;align-items:center;">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846"
     crossorigin="anonymous"></script>
<!-- 728x90 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-6556788076088846"
     data-ad-slot="5424355442"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </div>`
};

function insertAds() {
    const ad970Container = document.querySelector('.ad-970x250');
    const ad300Container = document.querySelector('.ad-300x250');
    const ad728Container = document.querySelector('.ad-728x90');
    
    if (ad970Container) {
        ad970Container.innerHTML = adCodes.ad970x250;
    }
    
    if (ad300Container) {
        ad300Container.innerHTML = adCodes.ad300x250;
    }

    if (ad728Container) {
        ad728Container.innerHTML = adCodes.ad728x90;
    }
}

// Gọi hàm insertAds khi trang đã tải xong
document.addEventListener('DOMContentLoaded', insertAds);