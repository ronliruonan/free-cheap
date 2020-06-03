const EOF = Symbol("EOF"); // EOF: End Of File 文件结束的标签

function data (c) {
  if (c == '<') return tagOpen;
  if (c == EOF) return;
  return data;
}

function tagOpen (c) {
  if (c == '/') return endTagOpen;
  if (c.match(/^[a-zA-Z]$/)) return tagName(c);
  return;
}

function tagName (c) {
  if (c.match(/^[\t\n\f ]$/)) return beforeAttributeName;
  if (c == '/') return selfClosingStartTag;
  if (c.match(/^[a-zA-Z]$/)) return tagName;
  if (c == '>') return data;

  return tagName;
}

function beforeAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) return beforeAttributeName;
  if (c == '>') return data;
  if (c == '=') return beforeAttributeName;
  return beforeAttributeName;
}

function selfClosingStartTag (c) {
  if (c=='>') {
    currentToken.isSelfClosing = true;
    return data;
  } 
  if (c == 'EOF') {

  }
  // TO DO
 }

module.exports.parseHTML = function parseHTML (html) {
  let state = data;
  for (const c of html) {
    state = state(c);
  }
  state = state(EOF);
}