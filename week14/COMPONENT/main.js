function creat (Cls, attributes, ...children) {
  let o;
  if (typeof Cls === 'string') {
    o = new Wrapper(Cls);
  } else {
    o = new Cls({
      timer: {}
    });
  }

  for (let name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  for (let child of children) {
    if (typeof child === 'string')
      child = new Text(child);
    
    o.appendChild(child);
  }

  return o;
}

class Text {
  constructor(text) {
    this.root = document.createTextNode(text)
  }

  mountTo (parent) {
    parent.appendChild(this.root);
  }
}

class Wrapper {
  constructor(type) {
    this.children = [];
    this.root = document.createElement(type)
  }

  setAttribute (name, value) { // attribute
    this.root.setAttribute(name, value);
  }

  appendChild (child) { // children
    this.children.push(child);
  }

  mountTo (parent) {
    parent.appendChild(this.root);
    for (let child of this.children) {
      child.mountTo(this.root)
    }
  }
}

class MyComponent {
  constructor(config) {
    this.children = [];
  }

  setAttribute (name, value) { // attribute
  }

  appendChild (child) { // children
    this.slot.appendChild(child);
  }

  render () {
    this.slot = <div></div>
    return <artical>
      <header>I'm a header</header>
      {this.slot}
      <footer>I'm a footer</footer>
    </artical>
  }

  mountTo (parent) {
    this.render().mountTo(parent);

    for (let child of this.children) {
      this.slot.appendChild(child);
    }
  }
}

// let component = <div id='a' class="b">
//   <div></div>
//   <div></div>
//   <div></div>
// </div>

let component = <MyComponent>
  <p>{new Wrapper('span')}</p>
</MyComponent>

component.mountTo(document.body);

// // <Parent id='a' class="b"> attributes
// // component.id = 'iddd' property
// component.id = 'iddd';

console.log(component);
// component.setAttribute('id', 'a');