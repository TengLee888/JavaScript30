# Objective
- 當游標移去li，出現內容物
- 並且出現background


<br>
# Note
### setTimeout()和this的地雷
```
setTimeout(function(){
  this.classList.add('trigger-enter-active');
}, 150);
```
- 這裡的this會抓到window
- setTimeout 執行的時間會在整個 JS execution context 都被執行完後才會執行（如果對這概念不清楚的話可參考：[筆記] 談談JavaScript中的asynchronous和event queue），因此函式建立的時間和實際執行的時間是不同的，因此這也創造了兩個不同時間點的 this 所指稱的對象。
- 因為它執行的時間點是在整個 JS execution context 執行完才執行，而當時的環境會變成是 global environment，因此使用傳統函式時，這個 this 指稱的對象會轉變成 window object 。
- 但是，**如果是使用新的箭頭函式（arrow function），這個 this 所指稱的對象則不會改變**，依然是 data 這個 object。
- Ref[https://pjchender.blogspot.tw/2017/01/es6-arrow-function.html]

### if(this.classList.contain())的妙用
```
  setTimeout(() => {
    if(this.classList.contains('trigger-enter')){
      this.classList.add('trigger-enter-active')
    }
  }, 150);
```
- 當游標快速地移來移去因為setTimeout()延遲的關係，會造成既使游標移走了150毫秒後background出現。因此加上```if(this.classList.contains('trigger-enter'))``` 防止background出現。
- 也可以寫作
```
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```


<br>
# New Discover
### getBoundingClientRect()
- 又忘了所以再寫一次
- 取得相對viewport該物件的高寬位置
