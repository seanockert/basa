/*
* basaModal
* Simple modal window
* (c) 2015 Sean Ockert

* Usage:
* <a href="#" onclick="basaModal.toggle('open', 'modal-1');">Open Modal 1</a>
* <div id="modal-1" class="modal" aria-hidden="true">
*   <h2>Modal 1</h2>
*   <a href="#" class="close" onclick="basaModal.toggle('close');">&#x2715;</a>
* </div>
* <div class="modal-overlay" onclick="basaModal.toggle('close');"></div>
*/

(function(modal){

  var allModals = document.getElementsByClassName('modal');
  var overlay = document.getElementById('modal-overlay');

  //exposed function
  modal.toggle = function(type, id){
    if (id && type == 'open') {
      var modal = document.getElementById(id);
      classie.addClass(modal, 'open');
      classie.addClass(overlay, 'open');
    } else {
      Array.prototype.forEach.call(allModals, function(elem) {
          classie.removeClass(elem, 'open');
      });
      classie.removeClass(overlay, 'open');
    }
    return false;
  };

}(this.basaModal = this.basaModal || {}));
