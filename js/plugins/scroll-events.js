/* scrollEvents function attaches a class="scrolled" to the body when scrolling the page so you can hook into that class
* Also looks for a navigation list named #main-nav and adds class="active" to the nav item that is currently scrolled to
* Sean Ockert 2015
* v1.1
*/

// Generic onResize listener - replace if using a framework
var addEvent = function(elem, type, eventHandle) {
  if (elem == null || typeof(elem) == 'undefined') return;
  if ( elem.addEventListener ) {
      elem.addEventListener( type, eventHandle, false );
  } else if ( elem.attachEvent ) {
      elem.attachEvent( "on" + type, eventHandle );
  } else {
      elem["on"+type]=eventHandle;
  }
};

// scrollEvents function autoloads
window.scrollEvents = (function() {

  var navContainer = document.getElementById('main-nav');
  var anchors = [];
  var hasNav = false;
  var anchorCount = 0;
  var didScroll = false;

  var body = document.querySelector('body'),
    shrinkOn = 80; // Pixels from the top of the page

  if (navContainer) { hasNav = true; } // Check if #main-nav exists

  // For each menu item, get distance from top of the anchor link
  var calcAnchorDist = function() {

    var navItems = navContainer.children;
    anchorCount = navItems.length;
    anchors = [];

    for (i = 0; i < anchorCount; ++i) {
      var id = (navItems[i].children[0].hash).substring(1);
      var anchor = document.getElementById(id);
      anchors[i] = anchor.offsetTop - 100;
    }

    ++anchorCount;
    anchors.push(9999999); // Add a final element to represent the end of the page

  }

  calcAnchorDist();

  window.onscroll = scrollEvent;

  function scrollEvent() {
      didScroll = true;
  }

  setInterval(function() {
    if (didScroll) {
      didScroll = false;

      var distanceY = window.pageYOffset || document.documentElement.scrollTop;

      // Apply a class 'scrolled' to body when starting to scroll page
      if (distanceY > shrinkOn) {
        classie.add(body,'scrolled');
      } else {
        if (classie.has(body,'scrolled')) {
          classie.remove(body,'scrolled');
        }
      }

      // For checking the active nav item and giving it an 'active' class. Only check if #main-nav element exists
      if (hasNav) {
        var active = 0;
        for (i = 0; i < anchorCount-1; ++i) {
          var anchor = anchors[i];
          var menuItem = navContainer.children[i];
          classie.remove(menuItem, 'active');

          if (distanceY >= anchor && distanceY < anchors[i+1]) {
            active = i;
            classie.add(menuItem, 'active');
          }
        }
      }
    }
  }, 100);

  // Listen for document resize
  addEvent(window, 'resize', function(e) {
    // Recalculate the distance from the top of each anchor after the page is resized
    calcAnchorDist();
  });

})();

