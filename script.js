document.body.style.backgroundColor = '#000';
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'section p { color: #fff!important }';
document.getElementsByTagName('head')[0].appendChild(style);
