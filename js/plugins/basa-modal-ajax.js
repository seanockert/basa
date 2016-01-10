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
* <div class="modal-overlay" class="modal-close"></div>
*/

/*! atomic v1.0.0 | (c) 2015 @toddmotto | https://github.com/toddmotto/atomic */
/* Required for AJAX calls */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b:a.atomic=b(a)}(this,function(a){"use strict";var b={},c={contentType:"application/x-www-form-urlencoded"},d=function(a){var b;try{b=JSON.parse(a.responseText)}catch(c){b=a.responseText}return[b,a]},e=function(b,e,f){var g={success:function(){},error:function(){},always:function(){}},h=a.XMLHttpRequest||ActiveXObject,i=new h("MSXML2.XMLHTTP.3.0");i.open(b,e,!0),i.setRequestHeader("Content-type",c.contentType),i.onreadystatechange=function(){var a;4===i.readyState&&(a=d(i),i.status>=200&&i.status<300?g.success.apply(g,a):g.error.apply(g,a),g.always.apply(g,a))},i.send(f);var j={success:function(a){return g.success=a,j},error:function(a){return g.error=a,j},always:function(a){return g.always=a,j}};return j};return b.get=function(a){return e("GET",a)},b.put=function(a,b){return e("PUT",a,b)},b.post=function(a,b){return e("POST",a,b)},b["delete"]=function(a){return e("DELETE",a)},b.setContentType=function(a){c.contentType=a},b});

(function(modalAjax){
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

  var regStripHead = /\<body[^>]*\>([^]*)\<\/body/m;

  var body = document.body;
  var modalDiv = document.getElementById('modal-ajax');
  var modalContent = document.getElementById('modal-content');
  var overlay = document.getElementById('modal-overlay');

  // Exposed function
  modalAjax.toggle = function(type, url){
    if (url && type == 'open') {
      atomic.get(url)
      .success(function (data) {
        modalContent.innerHTML = data.match(regStripHead)[1]; // Strip the head of the page
        addClass(modalDiv, 'open');
        addClass(body, 'modal-open');
      })
      .error(function (data) {
        modalContent.innerHTML = '<div class="error">Something went wrong. Try refreshing the page.</div>';
        addClass(modalDiv, 'open');
        addClass(body, 'modal-open');
      });
    } else if (type == 'close') {
      removeClass(modalDiv, 'open');
      removeClass(body, 'modal-open');
      modalContent.innerHTML = '<div class="loading">Loading...</div>';
      history.pushState('', document.title, window.location.pathname + window.location.search); // Remove hash
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
  var modals = _$('.modal-ajax').on('click', function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    var url = this.getAttribute('href');
    basaModalAjax.toggle('open', url);
    window.location.hash = 'modal';
  });

  // Check for links with 'modal-close' class and assign them to close the open modal
  var close = _$('.modal-close').on('click', function (e) {
    e.preventDefault();
    basaModalAjax.toggle('close');
  });

  window.onhashchange = function() {
    if (!location.hash){
      basaModal.toggle('close');
    }
  }

}(this.basaModalAjax = this.basaModalAjax || {}));

