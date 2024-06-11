var wl = window.location.hostname;
var iswl = false; //iswhitelisted
fetch("/assets/js/gads/whitelisted.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (wl == data[i].domain) {
        if (document.body.dataset.ess) {
          const autogads = document.createElement("script");
          autogads.setAttribute("async", "");
          autogads.setAttribute(
            "src",
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846"
          );
          autogads.setAttribute("crossorigin", "anonymous");
          document.head.appendChild(autogads);
        } else {
          const ogcontainer = document.querySelector(".othergames-container");
          const adDiv = document.createElement("div");
          adDiv.classList.add("adDiv");
          ogcontainer.prepend(adDiv);

          const adScript = document.createElement("script");
          adScript.async = true;
          adScript.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6556788076088846";
          adScript.crossOrigin = "anonymous";

          const adIns = document.createElement("ins");
          adIns.setAttribute("class", "adsbygoogle");
          adIns.setAttribute(
            "style",
            "display:block;width:300px;height:250px; margin: auto;"
          );
          adIns.setAttribute("data-ad-client", "ca-pub-6556788076088846");
          adIns.setAttribute("data-ad-slot", "9406916186");

          const adScript2 = document.createElement("script");
          adScript2.innerText =
            "(adsbygoogle = window.adsbygoogle || []).push({});";
          adDiv.append(adScript, adIns, adScript2);

          console.log("Ads displayed");
        }
      } else {
        console.log("Not whitelisted for ads");
      }
    }
  });
