/*
* basaModal
* Simple modal window
* (c) 2015 Sean Ockert

* Usage:
* <a href="#modal-1" class="modal-link">Open Modal 1</a>
* <div id="modal-1" class="modal" aria-hidden="true">
*   <h2>Modal 1</h2>
*   <a href="#" class="modal-close close">&#x2715;</a>
* </div>
* <div class="modal-overlay modal-close"></div>
*/

(function(modal){
  // adapted from http://git.io/blingjs - not supported on Android 2.3
  var _$ = document.querySelectorAll.bind(document);

  Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
    return this;
  };

  NodeList.prototype.__proto__ = Array.prototype;

  NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach(function (el) {
      el.on(name, fn);
    });
    return this;
  };
  // end bling.js

  var body = document.body;
  var allModals = document.getElementsByClassName('modal');
  var overlay = document.getElementById('modal-overlay');

  // Exposed function
  modal.toggle = function(type, id){
    if (id && type == 'open') {
      var modal = document.getElementById(id);
      addClass(modal, 'open');
      addClass(body, 'modal-open');
    } else {
      Array.prototype.forEach.call(allModals, function(elem) {
          addClass(elem, ' closing');
          setTimeout(function() {
            removeClass(elem, 'closing');
            removeClass(elem, 'open');
            removeClass(body, 'modal-open');
            history.pushState('', document.title, window.location.pathname + window.location.search); // Remove hash
          }, 150);
      });
    }
    return false;
  };

  var addClass = function(id, className) {
    id.className = id.className += ' ' + className;
  }

  var removeClass = function(id, className) {
    var findClass = new RegExp('(^|\\s+)' + className + '(\\s+|$)');
    id.className = id.className.replace(findClass, '');
  }

  // Check for links with 'modal-link' class and assign them to open the modal with the ID in their href
  var modals = _$('.modal-link').on('click', function (e) {
    e.stopImmediatePropagation();
    var id = this.getAttribute('href').substr(1);
    basaModal.toggle('open', id);
  });

  // Check for links with 'modal-close' class and assign them to close the open modal
  var close = _$('.modal-close').on('click', function (e) {
    e.preventDefault();
    basaModal.toggle('close');
  });

  window.onhashchange = function() {
    if (!location.hash){
      basaModal.toggle('close');
    }
  }

}(this.basaModal = this.basaModal || {}));

