// Simple Accordion with no dependencies
// Sean Ockert 2014

var accordionItems = new Array();

window.accordion = (function(){

    var container = document.getElementById('accordion');

    // Grab the accordion items from the page
    var items = container.childNodes;
    for ( var i = 0; i < items.length; i++ ) {
        if ( items[i].className == 'q' ) accordionItems.push( items[i] );
    }

    // Assign onclick events to the accordion item headings
    for ( var i = 0; i < accordionItems.length; i++ ) {
        var h2 = getFirstChildWithTagName( accordionItems[i], 'DT' );
        h2.onclick = toggleItem;
    }


    if (document.location.hash) {
        var id = document.location.hash.replace('#','');
        var elem = document.getElementById(id);

        for ( var i = 0; i < accordionItems.length; i++ ) {
            if (accordionItems[i].firstChild.nextSibling.id == id) {
              accordionItems[i].className = 'q';
            } else {
              accordionItems[i].className = 'q hide';
            }
        }

    } else {
        for ( var i = 0; i < accordionItems.length; i++ ) {
            accordionItems[i].className = 'q hide';
        }
    }


})();

function toggleItem() {
    var itemClass = this.parentNode.className;

    // Show this item if it was previously hidden
    if ( itemClass == 'q hide' ) {
      this.parentNode.className = 'q';
    } else {
       this.parentNode.className = 'q hide';
    }
}

function getFirstChildWithTagName( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
      if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
    }
}


