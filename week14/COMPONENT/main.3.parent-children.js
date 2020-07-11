/**
 * programa CreateElement
 */

function createElement (Cls, attributes, ...children) {
    let o = new Cls;

    for (let name in attributes)
        o[name] = attributes[name]

    console.log(children);
    return o;
}

class Parent {

}

class Child {

}

let component = <Parent id="a" class="b" >
    <Child></Child>
    <Child></Child>
    <Child></Child>
</Parent>

console.log(component)