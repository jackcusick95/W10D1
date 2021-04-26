

class DOMNodeCollection {
  constructor(array) {
    this.array = array; 
  }

  html(str) {
    if (str instanceof String) {
      this.array.forEach(el => el.innerHTML = str );  
    } else {
      return this.array[0].innerHTML; 
    }
  }

  empty() {
    this.array.forEach( el => el.innerHTML = "" ); 
  }

  append() {}




}


module.exports = DOMNodeCollection; 