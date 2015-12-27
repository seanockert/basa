﻿/*
* Responsive tabs 1.0
* with ARIA roles and back button support
* (c) 2015 Remy Sharp
* https://24ways.org/2015/how-tabs-should-work
* Required styles in /scss/plugins/_tabs.scss
*/

(function(tabs){
// adapted from http://git.io/blingjs
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
// end of bling.js ----

// a temp value to cache *what* we're about to show
var target = null;

// collect all the tabs
var tabs = _$('.tab').on('click', function () {
  target = _$(this.hash)[0];
  if (target) {
    target.id = '';
    console.log(target);
    if (location.hash === this.hash) {
      setTimeout(update);
    }
  }
}).map(function (el) {
  el.tabindex = 0;
  return el;
});

// get an array of the panel ids (from the anchor hash)
var targets = tabs.map(function (el) {
  return el.hash;
});

// use those ids to get a jQuery collection of panels
var panels = _$(targets.join(',')).map(function (el) {
  // keep a copy of what the original el.id was
  el.dataset.old = el.id;
  return el;
});

function update() {
  if (target) {
    target.id = target.dataset.old;
    target = null;
  }

  var hash = window.location.hash;
  if (targets.indexOf(hash) !== -1) {
    return show(hash);
  }

  if (!hash) {
    show();
  }
}

function show(id) {
  // if no value was given, let's take the first panel
  if (!id) {
    id = targets[0];
  }
  // remove the selected class from the tabs,
  // and add it back to the one the user selected
  tabs.forEach(function (el) {
    var match = el.hash === id;
    el.classList[match ? 'add' : 'remove']('selected');
    el.setAttribute('aria-selected', match);
  });

  // now hide all the panels, then filter to
  // the one we're interested in, and show it
  panels.forEach(function (el) {
    var match = '#' + el.id === id;
    el.style.display = match ? '' : 'none';
    el.setAttribute('aria-hidden', !match);
  });
}

window.addEventListener('hashchange', update);

// initialise
if (targets.indexOf(window.location.hash) !== -1) {
  update();
} else {
  show();
}
}(this.tabs = this.tabs || {}));