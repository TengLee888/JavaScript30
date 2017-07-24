# Objective
- 練習Array
<br>
<br>


# Note
- 第三題也可以這樣寫
```
var oldToYoung2 = inventors.sort((a, b) => a.year - b.year);
console.table(oldToYoung2);
```
<br>


- 第六題，**讀取網頁資料做成Array**，先用querySelectorAll讀取網頁資料，因為querySelectorAll傳出的是nodelist，因此用Array.from()改成array格式
- 傳出Array另一種寫法, Array.apply(null, nodelist);
```
const nodelist = document.querySelectorAll('.mw-category a');
const links = Array.apply(null, nodelist);
```
- 然後用map()及.textContent做成字串的array
- 最後用match() 或  includes()篩選就好了
```
another method
var fliterDe = des.filter(de => de.includes("de"));
```
<br>

- 第七題是一個不錯的練習，**以元素中的特定位置的值來排列**，做法是用split()分割成小陣列，再排列小陣列．
```
var sortLastName = people.sort(function(lastOne , nextOne){
  var [alast , afirst] = lastOne.split(', ');
  var [blast , bfirst] = nextOne.split(', ');
  return alast > blast ? 1 : -1;
  });
```
<br>


- 第8題最後寫一個,{} 以物件方式回傳
<br>
<br>

# New Discover
<br>

### filter()
- 給他一個判斷式，return true他會給你一個新的Array
- filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
<br>


### map()
- 就像一個加工機器
- map() always **return the same length of array**
- The map() method creates a new array with the results of calling a provided function on every element in the calling array.
<br>


### sort()
- 可以根據數目或字母排列
- If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
- If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
<br>


### reduce()
- 由左至右的為陣列中的每個元素呼叫一次回呼函式，並將回呼函式的傳回值當作下一次呼叫回呼函式的參數傳入。
- The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
<br>


### Array.from(document.querySelectorAll(''));
- querySelectorAll回傳的是nodelist，如使用Array.from()就可以回傳陣列
<br>

### match()
- The match() method retrieves the matches when matching a string against a regular expression.
<br>

### match()
- 回傳matches
- searches a string for a match against a regular expression, and **returns the matches**, as an Array object
<br>

### includes()
- 回傳true or false
-  determines whether a string contains the characters of a specified string.
- This method returns **true** if the string contains the characters, and **false** if not.
