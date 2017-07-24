# Object
- I dont care
- Practice array method
<br>
<br>

# New Discover
### getFullYear()
```
new Date().getFullYear() // 2017
```
<br>


### some()
- 在Array裡**只要有一個元素滿足**測試函數就停下來回傳true
- If it finds an array element where the function returns a true value, some() returns true
<br>


### every()
- 在Array裡**全部都要滿足**測試函數才回傳true
- The every() method tests whether all elements in the array pass the test implemented by the provided function.
<br>


### find()
- 在Array裡**回傳滿足測試函數的元素**
- The find() method returns the value of the first element in an array that pass a test (provided as a function).
<br>


###  splice()
- 此方法可在Array**刪除，添加新的元素**，中文意思就是拼接．
- array.splice(start, deleteCount, addItem1, addItem2, ...)
<br>


### slice()
- 從Array**提取元素**，中文意思就是一片片
- arr.slice(begin, end)，開始的是數字包含，結束的數字不包含
- The slice() method returns the selected elements in an array, as a new array object.
- 下面是另一種寫法，用...和slice把Array分成兩塊，一塊(0, index),另一塊(index+1)
```
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
```
