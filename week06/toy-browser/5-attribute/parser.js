let currentToken = null;
let currentAttribute = null;

function emit (token) {
  // if (token.type != 'text') 
  console.log(token);
}

const EOF = Symbol("EOF"); // EOF: End Of File 文件结束的标签

function data (c) {
  if (c == '<') return tagOpen;
  if (c == EOF) {
    emit({
      type: 'EOF'
    })
    return;
  }

  emit({
    type: 'text',
    content: c
  });
  return data;
}

function tagOpen (c) {
  if (c == '/') return endTagOpen;
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'startTag',
      tagName: '',
    }
    return tagName(c);
  }
  emit({
    type: 'text',
    content: c,
  });
  return;
}

function tagName (c) {
  if (c.match(/^[\t\n\f ]$/)) return beforeAttributeName;
  if (c == '/') return selfClosingStartTag;
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c; // .toLowerCase();
    return tagName;
  }
  if (c == '>') {
    emit(currentToken);
    return data;
  }

  return tagName;
}

function beforeAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) return beforeAttributeName;
  if (c == '/' || c == '>' || c == EOF) return afterAttributeName;
  if (c == '=') {

  } else {
    currentAttribute = {
      name: '',
      value: '',
    };
    return attributeName(c);
  }
}
function beforeAttributeValue (c) { }
function doubleQuotedAttributeValue (c) { }
function singleQuotedAttributeValue (c) { }
function afterQuoAttributeValue (c) { }
function UnquotedAttribugteValue (c) { }
function afterAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/) || c == '/' || c == '>' || c == EOF) return afterAttributeName;

  if (c == '=') return beforeAttributeName;
  if (c == '\u0000') { }
  else if (c == '\"' || c == "'" || c == '<') { }
  else { }
}
function attributeName (c) { }

function selfClosingStartTag (c) {
  if (c == '>') {
    currentToken.isSelfClosing = true;
    return data;
  }
  if (c == 'EOF') {

  }
  // TO DO
}

function endTagOpen (c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'endTag',
      tagName: '',
    }
    return tagName(c);
  }

  if (c == '>') { }

  if (c == EOF) { }

}

module.exports.parseHTML = function parseHTML (html) {
  let state = data;
  for (const c of html) {
    state = state(c);
  }
  state = state(EOF);
}