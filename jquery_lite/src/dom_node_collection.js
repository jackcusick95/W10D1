

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



  // TRAVERSAL
  children() {
    const childCollection = this.array.map(el => el.children); 
    let childArr = []; 

    childCollection.forEach(el => {
      childArr = childArr.concat( Array.from(el) )
    })

    return new DOMNodeCollection(childArr); 
  }
  
  parent() {
    const parentCollection = this.array.map(el => {
      debugger
      return el.parentElement
    }); 
    let parentArr = []; 

    parentCollection.forEach(el => parentArr.push(el) )
  
    return new DOMNodeCollection(parentArr); 
  }

  find(selector) {
    const nodeLists = this.array.map( el => {
      return el.querySelectorAll(`${selector}`); 
    }); 

    let selectArr = [];

    nodeLists.forEach( list => {
      selectArr = selectArr.concat(Array.from(list)); 
    })

    return new DOMNodeCollection(selectArr); 
  }

  remove() {
    this.array.forEach( el => el.remove());
  }
}


module.exports = DOMNodeCollection; 