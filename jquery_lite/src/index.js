
const DOMNode = require('./dom_node_collection'); 



const $l = function(el) {
  if (el instanceof HTMLElement) {
    return new DOMNode([el]); 
  } else {
    const nodeArray = document.querySelectorAll(el); 
    return Array.from(nodeArray); 
  }
}







window.$l = $l; 