# Objective
- 號稱基礎中的實戰作業，面試會用到，練習會用到，比較不同語言會用到的 To Do List


<br>

# Note
## function addItems()
```
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
```

- '[name=item]'
  - 也可寫作'[name]' , '[name="item"]' , '[dish]'，就是一個稱呼
- e.preventDefault();，防止reflash資料不見
- this.reset();，重新整理去掉input的資料

<br>

## function populateList()
```
function populateList(plates = [] , platesList) {
  platesList.innerHTML = plates.map((plate , i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}  
```

  - plates = []
    - in case i forget to pass in something, It will not going to break my Javascript, It only loop over my array with nothing  
- (plates = [] , platesList)
  - plates 為input輸入的value 'item'，變成array 'items' {text: "fish", done: false}
  - platesList, 為HTML，當輸入fish和pork則變成下面
  ```
  <ul class="plates">
    <li>
      <label>fish</label>
    </li>
    <li>
      <label>pork</label>
    </li>
  </ul>
  ```

- plates.map((plate , i) =>{})
  - i 當下的element 'item'的 指數index
- join('') 把element 互相加成連起來的HTML，可以去掉逗號
```
不加join()會這樣
<ul class="plates">
  <li>
    <label>fish</label>
  </li>
,
  <li>
    <label>pork</label>
  </li>
</ul>
```
<br>
```
`<li>
  <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ''} />
  <label for="item${i}">${plate.text}</label>
</li>`
```
- data-index=${i}，後面checkbox會用到
- id="item${i}"，連結for="item${i}"
- ${plate.done ? "checked" : ''}，當plate的done 為true就顯示checked，反之是空格
- for="item${i}"，The for attribute specifies which form element a label is bound to


<br>
## 儲存在localStorage＆呈現在網頁

```
const items = JSON.parse(localStorage.getItem('items')) || [];
...
addItems.addEventListener('submit' , addItem);
populateList(items , itemsList);
```
- 因為localStorage只接受存入string, 所以先把身為array的items用JSON.stringify變為JSONstring, 再存入localStorage
- populateList(items , itemsList) 的意義是reflash的時候populateList去localStorage找value呈現在網頁上
- items = JSON.parse(localStorage.getItem('items'))
  - localStorage.getItem('items')，去localStorage找叫item的value
  - JSON.parse()再把string變成array


<br>
## function toggleDone (e)
```
function toggleDone (e) {
  if(!e.target.matches('input')) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items' , JSON.stringify(items));
  populateList(items , itemsList);
}
```
- if(!e.target.matches('input')) return;，滑鼠點擊item會選到labal 和 input因此用!e.target.matches('input')排除input以外的東西
- const index = e.target.dataset.index; 取得index用在array
- items[index].done = !items[index].done;，改變done的boolean
- 後面就是改寫localStorage的value再重新呈現在網頁


<br>
# New Discover
### preventDefault
- syntax: event.preventDefault();
- 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。
- 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。



### reset()
- syntax: formObject.reset()
- The reset() method resets the values of all elements in a form (same as clicking the Reset button).


### map(),
- Argument index
  - The index of the current element being processed in the array.
  - The array index of the current element
- Array
  - The array map was called upon.
  - Optional. The array object the current element belongs to



### localStorage.setItem()
- The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
- Syntax: storage.setItem(keyName, keyValue);
- **only save string**
- Exception: setItem() may throw an exception if the storage is full. Particularly, in Mobile Safari (since iOS 5) it always throws when the user enters private mode (Safari sets quota to 0 bytes in private mode, contrary to other browsers, who allow storage in private mode, using separate data containers). Hence developers should make sure to **always catch the possible exceptions from setItem().**


### JSON.stringify()
- convert object or array to JSON string
- The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.
- JSON.stringify(value[, replacer[, space]])


### Storage.getItem()
- Syntax: var aValue = storage.getItem(keyName);
- The getItem() method of the Storage interface, when passed a key name, will return that key's value.
- Return value: A DOMString containing the value of the key. If the key does not exist, null is returned.


### JSON.parse()
- JSON.parse() 方法把會把一個JSON字串轉換成 JavaScript的數值或是物件。另外也可選擇使用reviver函數讓這些數值或是物件在被回傳之前做轉換。
- JSON.parse(text[, reviver])



### Element.matches()
- The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false.
- var result = element.matches(selectorString);
