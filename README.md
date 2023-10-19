# DarkMode

Dark Mode script used in Orion Browser. Less than 1kb of code, works (mostly) decent on most sites.

## Usage outside Orion

Run the script on a page to toggle dark mode or make it a bookmarklet.

### Make a bookmark

1. Right-click your bookmark bar and click "Add Page..."
2. Make the "name" whatever your want (e.g. Dark Mode)
3. In the URL section, insert the following code:

```javacript
javascript:(function(){let a='\n:root{filter:invert(90%) hue-rotate(180deg) brightness(100%) contrast(100%);\n    background:#fff;}\niframe,img,image,video,[style*="background-image"]{filter:invert() hue-rotate(180deg) brightness(105%) contrast(105%);}';id="obdt",ee=document.getElementById(id),null!=ee?ee.parentNode.removeChild(ee):(s=document.createElement("style"),s.type="text/css",s.id=id,s.styleSheet?s.styleSheet.cssText=a:s.appendChild(document.createTextNode(a)),document.head.appendChild(s));})()
```

4. Profit$