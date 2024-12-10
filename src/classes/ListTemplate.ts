// Creates a new <li> element.
// Creates an <h4> element, sets its inner text to the heading, and appends it to the <li>.
// Creates a <p> element, sets its inner text to the result of item.format(), and appends it to the <li>.
// Appends the <li> to the container:
// If pos is 'start', the <li> is prepended to the container.
// If pos is 'end', the <li> is appended to the container.

import {HasFormatter} from "../interfaces/HasFormatter"

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end' ){
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    (pos === 'start' ? this.container.prepend : this.container.append).call(this.container, li);
      
  }

}



// import { HasFormatter } from "../interfaces/HasFormatter";

// export class ListTemplate {
//   constructor(private container: HTMLUListElement){}

//   render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
//     const li = document.createElement('li');
  
//     const h4 = document.createElement('h4');
//     h4.innerText = heading;
//     li.append(h4);

//     const p = document.createElement('p');
//     p.innerText = item.format();
//     li.append(p);

//     if(pos === 'start'){
//       this.container.prepend(li);
//     } else {
//       this.container.append(li);
//     }
//   }
// }