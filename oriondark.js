let a = `
:root {
    filter: invert(90%) hue-rotate(180deg) brightness(100%) contrast(100%);
    background: #fff;
} 

iframe, img, image, video, [style*="background-image"] { 
    filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
} 
`;
  
id="obdt";
ee = document.getElementById(id);
if (null != ee) ee.parentNode.removeChild(ee);
else {
  s = document.createElement('style');
  s.type = "text/css";
  s.id = id;
  if (s.styleSheet) s.styleSheet.cssText = a;
  else s.appendChild(document.createTextNode(a));
  document.head.appendChild(s);
}
