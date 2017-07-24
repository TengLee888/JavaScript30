# Objective
- 練習style改變
<br>

# Note
對所有[input]監聽，當input改變則修改style.setProperty
<br>


- 先把要監聽的input做成一個物件, 另外`.controls input`也可以寫成'input'
```
var inputs = document.querySelectorAll(`.controls input`);
// [input#spacing, input#blur, input#base]
```
<br>


- 對每一個input監聽，'change'是mouseup value改變時, 'mousemove'是mouse按著的時候改變value
```
inputs.forEach(input => input.addEventListener('change' , handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove' , handleUpdate));
```
<br>


- 但是把value傳進去後，還缺value的單位，如是blur或spacing就傳入px，如是base就傳空集
- 在HTML的tag裡，這樣寫```data-sizing="px"```，就可以在js寫dataset.sizing
```
const suffix = this.dataset.sizing || '';  
```
<br>


- 在root設定img的參數，以下的寫法**很重要**
```
//CSS
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur:  10px;
}
img {
  padding: var(--spacing);
  background-color: var(--base);
  filter: blur(var(--blur));
}
```
<br>
<br>

# New Discover

### :root
- The :root CSS pseudo-class matches the root element of a tree representing the document. In HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.
- The :root selector matches the document's root element.
<br>

### dataset
- example

```
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>

let el = document.querySelector('#user');

// el.id == 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''
```


### documentElement
- Document.documentElement 會回傳目前文件（document）中的根元素（Element），如：HTML 文件中的 <html> 元素。
