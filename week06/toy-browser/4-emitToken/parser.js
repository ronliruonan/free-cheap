let currentToken = null;

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
  return;
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
  if (c == '>') return data;
  if (c == '=') return beforeAttributeName;
  return beforeAttributeName;
}

function selfClosingStartTag (c) {
  if (c == '>') {
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