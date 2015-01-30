var mobile = false;
var device = 'pc';

$(document).ready( function() {

  // Your code here

  // Enable Fastclick to disable the 300ms touch delay on mobile devices
  FastClick.attach(document.body);

  detectDevice();
  checkSize();


});

function checkSize() {
  // Set a flag for mobile or desktop size
};


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
};



// Init Swipe slider plugin
var elem = document.getElementById('swipe');
window.slider = Swipe(elem, {
  startSlide: 0,
  auto: 1500,
  continuous: true,
});

// Init Flowtype plugin
var flowtypeElem = document.getElementById('flowtype-demo');
window.flowtype( flowtypeElem, {
  minFont : 16,
  maxFont : 48,
  fontRatio : 36
});


// Init Responsive Navigation Plugin - js/plugins/responsive-nav.min.js
var navigation = responsiveNav('#responsive-nav', {
  transition: 250,
  label: 'Menu',
  insert: 'before',
  customToggle: '#menu',
  openPos: 'relative',
  open: function () {
    var menu = document.getElementById("menu");
    menu.className = menu.className.replace(/(^|\s)open(\s|$)/, 'close ');
  },
  close: function () {
    var menu = document.getElementById("menu");
    menu.className = menu.className.replace(/(^|\s)close(\s|$)/, 'open ');
  }
});


// For triggering animations
$("#test-animate li a").click(function(e) {
  e.preventDefault();

  var anim = $(this).data('anim');

  if (anim == 'fill-list') {
    queueAnim();
  } else {
    var element = document.getElementById("box-animate");
    element.className = '';
    element.offsetWidth = element.offsetWidth;
    element.classList.add(anim);

  }
  
  return false;
});

$(".loading").click(function(e) {
  this.disabled = true;
  this.children[0].className = 'hidden';
  this.children[1].className = '';
  
  return true;
});

