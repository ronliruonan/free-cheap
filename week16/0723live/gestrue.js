function enableGestrue (element) {
  console.log(element);
  let contexts = Object.create(null);

  let MOUSE_SYMBOL = Symbol('mouse')

  if (document.ontouchstart !== null)
    element.addEventListener('mousedown', () => {
      contexts[MOUSE_SYMBOL] = Object.create(null);

      start(event, contexts[MOUSE_SYMBOL]);

      let mousemove = event => {
        move(event, contexts[MOUSE_SYMBOL]);
      }
      let mouseend = event => {
        end(event, contexts[MOUSE_SYMBOL]);
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseend);
      };

      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseend);
    });

  element.addEventListener('touchstart', event => {
    for (const touch of event.changedTouches) {
      contexts[touch.identifier] = Object.create(null);
      start(touch, contexts[touch.identifier]);
    }
  })

  element.addEventListener('touchmove', event => {
    for (const touch of event.changedTouches) {
      move(touch, contexts[touch.identifier]);
    }
  })

  element.addEventListener('touchend', event => {
    for (const touch of event.changedTouches) {
      end(touch, contexts[touch.identifier]);
      delete contexts[touch.identifier];
    }
  })

  element.addEventListener('touchcancel', event => {
    for (const touch of event.changedTouches) {
      cancle(touch, contexts[touch.identifier]);
      delete contexts[touch.identifier];
    }
  })

  // tap
  // pan - panstart panmove panend
  // flick
  // press - pressstart pressend

  let start = (point, context) => {
    element.dispatchEvent(new CustomEvent('start', {
      startX: point.clientX,
      startY: point.clientY,
      clientX: point.clientX,
      clientY: point.clientY
    }));

    context.startX = point.clientX, context.startY = point.clientY;
    context.isTap = true;
    context.isPan = false;
    context.isPress = false;
    context.timeoutHandledr = setTimeout(() => {
      if (context.isPan)
        return;
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      // console.log('pressstart')
      element.dispatchEvent(new CustomEvent('pressstart', {}))
    }, 1000 * 0.5)

    context.moves = [];
  }

  let move = (point, context) => {
    let dx = point.clientX - context.startX, dy = point.clientY - context.startY;

    if (dx ** 2 + dy ** 2 > 100 && !context.isPan) {
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      // console.log('panstart')
      element.dispatchEvent(new CustomEvent('pressstart', {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      }))
    }


    if (context.isPan) {
      element.dispatchEvent(Object.assign(new CustomEvent('pan'), {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY
      }))

      context.moves.push({
        dx, dy,
        t: Date.now()
      })

      context.moves = context.moves.filter(record => Date.now() - record.t < 300);
    }
  }

  let end = (point, context) => {
    if (context.isPan) {
      let dx = point.clientX - context.startX, dy = point.clientY - context.startY;

      let record = context.moves[0];
      let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t);

      let isFlick = speed > 2.5;
      if (isFlick) {
        // console.log('flick', speed)
        element.dispatchEvent(new CustomEvent('flick', {
          startX: context.startX,
          startY: context.startY,
          clientX: point.clientX,
          clientY: point.clientY,
          speed: speed
        }));
      }
      // console.log('panend', speed)
      element.dispatchEvent(Object.assign(new CustomEvent('panend'), {
        startX: context.startX,
        startY: context.startY,
        clientX: point.clientX,
        clientY: point.clientY,
        speed: speed,
        isFlick,
      }))

    }
    if (context.isTap)
      element.dispatchEvent(new CustomEvent('tap', {}));
    if (context.isPress)
      element.dispatchEvent(new CustomEvent('pressend', {}));
    // console.log('pressend')

    clearTimeout(context.timeoutHandledr)
  }

  let cancle = (point, context) => {
    console.log('cancle')
    element.dispatchEvent(new CustomEvent('cancle', {}));

    clearTimeout(context.timeoutHandledr)
  }

}
