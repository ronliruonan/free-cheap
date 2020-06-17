
## CSS
1. 两个好兄弟，具体原因看之前的录播, **基线对齐**
```css
  .cell {
    display: inline-block;
    vertical-align: middle;
  }
```

2. 在盒子与字体间 加一个空白行
```css
  .cell {
    width: 100px;
    height: 100px;
    display:inline-block;
    vertical-align: middle;

    /* 在盒子与字体间 加一个空白行 */
    font-size: 50px;
    text-align: center;
    line-height: 100px;
  }
```

## JavsScript
1. 性能误解： 以为事件绑定多了会影响性能
- a. 思考性能重不重要
- b. 是不是真的影响性能

**绑定事件多不会影响性能，而是触发的事件多会影响性能。**

2. `return` 在函数中直接返回值，不管是不是出现在循环内部

3. 之前偶尔会纠结`addEventListener(eventName, handler, false)` 怎么给`handler`传参更方便，原来箭头就很方便d