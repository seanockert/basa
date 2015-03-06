var queueAnim = function() {

  var element = document.getElementById("list-animate");
  var animation = 'fly-in';
  var delay = 60; //ms
  len = element.children.length;

  for (i = 0; i < len; ++i) {
    var item = element.children[i];

    item.className = 'hide';
    item.offsetWidth = item.offsetWidth; // CLear item first

    triggerAnim(i, item); // Stagger the animation
  }

  function triggerAnim(i, item) {
    setTimeout(function(){ classie.add(item, animation); classie.remove(item, 'hide'); }, (i+1) * delay);
  }
}