var mobile = false;
var device = 'pc';

$(document).ready( function() {

  // Your code here

  FastClick.attach(document.body);

  detectDevice();
  checkSize();



});

function checkSize() {
  // Set a flag for mobile or desktop size
}

// Detects the device the visitor is using
function detectDevice() {
  if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    device = 'ios';
  }
  if (/Android/i.test(navigator.userAgent)) {
    device = 'android';
  }
  if (/Silk|Kindle|KFTT|KFOT/i.test(navigator.userAgent)) {
    device = 'kindle';
  }
  if (/BlackBerry|BB|PlayBook/i.test(navigator.userAgent)) {
    device = 'blackberry';
  }

  $('html').addClass(device);
}


// Add Flowtype
var flowtypeElem = document.getElementById('flowtype-demo');
window.flowtype( flowtypeElem, {
  minFont : 16,
  maxFont : 48,
  fontRatio : 36
});


// For Responsive Navigation Plugin - js/plugins/responsive-nav.min.js
var navigation = responsiveNav('#responsive-nav', {
  transition: 250,
  label: 'Menu',
  insert: 'before',
  customToggle: '#menu',
  openPos: 'relative',
  open: function () {
    var menu = document.getElementById("menu");
    menu.className=menu.className.replace(/(^|\s)open(\s|$)/, 'close ');
  },
  close: function () {
    var menu = document.getElementById("menu");
    menu.className=menu.className.replace(/(^|\s)close(\s|$)/, 'open ');
  }
});


  // For triggering animations
  $("#test-animate li a").click(function(e) {
    e.preventDefault();

    var anim = $(this).data('anim');
    element = document.getElementById("box-animate");
    element.className = '';
    element.offsetWidth = element.offsetWidth;
    element.classList.add(anim);

    return false;
  });

