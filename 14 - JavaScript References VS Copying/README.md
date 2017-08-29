# Objective
- 了解array & object常有bug的地方


<br>
# Note

### Array
```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players , team);  //都是['Wes', 'Sarah', 'Ryan', 'Poppy']
team[3] = 'Lux';
console.log(players , team);  //都是['Wes', 'Sarah', 'Ryan', 'Lux']
```
- 在JavaScript中，宣告的陣列與物件在指定給其他值的時候，都是把記憶體位置丟給他們，所以才會像上面範例那樣， team這個陣列的值修改了也會改變到原來指定給他的players陣列。
- ref https://pjchender.blogspot.tw/2016/03/javascriptby-referenceby-value.html
- 另外有三個方法可以解決這個問題，也就是新增一個array
```
// one way
const team2 = players.slice();
team2[3] = 'Lux';
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Lux';
```


### Object
- object 也有一樣問題
- 兩種解決辦法
```
const cap2 = Object.assign({} , person , {number: 99});
console.log(person , cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};


const dev2 = JSON.
```
-  缺點，上面兩種做法只會傳一層得值，下一層是傳ref，造成兩個obj連到同一個記憶體，解決辦法如下，但斯乎很少這樣做
```
const cap2 = Object.assign({} , objName
  ```


<br>
# New Discover

### var
- 作用域是函数域而不是块级分割的
```
var a = 5;
if(true){
    var a = 10;
}
console.log(a);//10 a共用同一个内存,所以 ES6中的let关键词“修复”了这个问题
```



### let
- 僅在代碼區塊內有效（block-scoped），也就是僅在限定的{ }內有效
- let作用在块级作用域中，所以不管是switch还是if还是for，只要是let定义的变量，他就只能在那个花括号内部起作用。
```
let a = 5;
if(true){
    let a = 10;
}
console.log(a); //5
```


### const
- 僅在代碼區塊內有效（block-scoped），也就是僅在限定的{ }內有效


### primitive type
- integer, string, boolean
- call by value


### Object（或function）
- call by reference


### object literal(例外情況)
- call  by value
```
c = {greeting: "Hola"};
console.log(c);
console.log(d);
```
- 如果我們是用object literal的方式去定義c, 在這種情況底下，因為它並不清楚c的內容是已經存在的，所以它會建立一個新的記憶體位置來存放c物件裡面的內容。


### concat()
- concat() 方法回傳一個包含呼叫者陣列本身的值，以及被當作參數提供的陣列或是值的而成的新陣列。

# Exercise
```
function run() {
    var a = 0;
    if(true) {
        var a = 1;
        console.log(a);  // 1
    }
console.log(a) // 1
}
run();

``
function run() {
    var a = 0;
    if(true) {
        let a = 1;
        console.log(a);  // 1
    }
console.log(a) // 0
}
run();
```
