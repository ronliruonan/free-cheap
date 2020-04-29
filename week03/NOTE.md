# 每周总结可以写在这里

## 类型转换

|           |     Number     |      String      | Boolean  | undefiner | Null  | Object | Symbol |
| :-------- | :------------: | :--------------: | :------: | :-------: | :---: | :----: | :----: |
| Number    |       -        |                  | 0 false  |           |       | Boxing |   x    |
| String    |                |        -         | "" false |           |       | Boxing |   x    |
| Boolean   | true 1 false 0 |  'true' 'false'  |    -     |           |       | Boxing |   x    |
| undefiner |      NaN       |   'undefiner'    |  false   |     -     |       |        |   x    |
| Null      |       0        |      'null'      |  false   |           |   -   |        |   x    |
| Object    |    valueof     | valueof toString |   true   |           |       |   -    |   x    |
| Symbol    |       x        |        x         |    x     |     x     |   x   | Boxing |   -    |



## 根据课上老师的示范，找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

1. Bound Function Exotic Objects

`[[Call]]`, 
`[[Construct]]` , 

2. Array Exotic Objects

`[[DefineOwnProperty]]`, 
`ArrayCreate(length[,proto])`, 
`ArraySpeciesCreate(originalArray,length)` `ArraySetLength(A,Desc)`, 

3. String Exotic Objects

`[[GetOwnProperty]]`, 
 `[[DefineOwnProperty]]`, 
 `[[OwnPropertyKeys]]`, 
 `StringCreate(value,prototype)`, 
 `StringGetOwnProperty(S,P)`, 


4. Arguments Exotic Objects

`[[GetOwnProperty]]`, 
 `[[DefineOwnProperty]]`, 
 `[[Get]]`, 
 `[[Set]]`, 
 `[[Delete]]` ,

5. Integer-Indexed Exotic Objects

`[[GetOwnProperty]]`, 
 `[[HasProperty]]`, 
 `[[DefineOwnProperty]]`, 
 `[[Get]]`, 
 `[[Set]]`, 
 `[[OwnPropertyKeys]]`,

6. Module Namespace Exotic Objects

`[[SetPrototypeOf]] `, 
`[[IsExtensible]]` , 
`[[PreventExtensions]]`, 
` [[GetOwnProperty]]`, 
` [[DefineOwnProperty]]`, 
` [[HasProperty]]`, 
` [[Get]]`, 
` [[Set]]`, 
` [[Delete]]`,
` [[OwnPropertyKeys]]`, 

7. Immutable Prototype Exotic Objects

`[[SetPrototypeOf]]`,
`SetImmutablePrototype`,