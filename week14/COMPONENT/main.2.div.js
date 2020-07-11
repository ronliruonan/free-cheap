/**
 * programa CreateElement
 */

function createElement (Cls, attributes, ...children) {
    let o = new Cls;

    for (let name in attributes)
        o[name] = attributes[name]

    return o;
}

class Div {

}

let component = <Div id="a" class="b" ></Div>

console.log(component)