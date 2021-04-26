

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

  append(arg) {
    // arg is $l, HTML element, or a string
    if (arg instanceof HTMLElement || arg instanceof String) {
      this.array.forEach( el => el.append(arg.outerHTML));
    } else if (arg.length > 1) {
      this.array.forEach(el => {
        for (const argEl of arg) {
          el.append(argEl.outerHTML);
        } 
      });
    }
  }

  attr(attribute, val) {
    if (!val) {
      return this.array[0].getAttribute(attribute);
    } else {
      this.array.forEach( el => el.setAttribute(attribute, val)); 
    }
  }

  addClass(str) {
    this.array.forEach( el => el.classList.add(str)); 
  }

  removeClass() {
    this.array.forEach(el => el.classList.remove(str));
  }



}


module.exports = DOMNodeCollection; 