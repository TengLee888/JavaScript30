# Objective
- Hold the key!!
- 按著shiftKey全選
- 延伸出的概念是怎麼定義範圍的兩端，再用forEach改變範圍裡的元素
<br>
<br>


# Note
- 當有按shift和點擊checkbox，對checkboxes裡每個元素做一件事情
```
if(e.shiftKey && this.checked){
  checkboxes.forEach(checkbox => {
  });
}
```
<br>


- 如何定義shift的邊界，這是這整篇的核心．每一次的點擊為this，再用```lastChecked = this```，因此就定義出每一次的點擊為this，而每上一次的點擊都成為lastChecked．
<br>


- 如何把shift範圍內的checkbox變為checked？ 先設```let inBetween = false;```，forEach進行時，撞到(checkbox === this || lastChecked === checkbox)也就是我們上面定義的邊界，執行```inBetween = !inBetween;```，就把inBetween變為true，當inBetween為true，true就會assign至checkbox.checked．
```
let inBetween = false;
if(e.shiftKey && this.checked){
  checkboxes.forEach(checkbox => {
    if(checkbox === this || lastChecked === checkbox ){
      inBetween = !inBetween;
    }
    if(inBetween){
      checkbox.checked = true;
    }
  });
}
```
<br>
<br>


# New Discover
### shiftKey
- The shiftKey property returns a Boolean value
<br>


### checkbox.checked
- checkbox直接這樣寫```checkbox.checked = true;```就等於checked了
