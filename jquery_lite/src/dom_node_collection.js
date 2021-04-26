

class DOMNodeCollection {
  constructor(array) {
    this.array = array; 
  }

  html(str) {
    if (!str) {
      return this.array[0].innerHTML; 
    } else {
      this.array.forEach(el => el.innerHTML = str );  
    }
  }

  empty() {
    this.array.forEach( el => el.innerHTML = "" ); 
  }

  append(arg) {
    // arg is $l, HTML element, or a string
    if (arg instanceof HTMLElement) {
      this.array.forEach( el => el.innerHTML += arg.outerHTML );

    } else if (typeof arg === "string") {
      this.array.forEach( el => el.innerHTML += arg );

    } else if (arg.length > 1) {
      this.array.forEach(el => {
        for (const argEl of arg) {
          el.innerHTML += argEl.outerHTML;
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

  removeClass(str) {
    this.array.forEach(el => el.classList.remove(str));
  }


}


module.exports = DOMNodeCollection; 