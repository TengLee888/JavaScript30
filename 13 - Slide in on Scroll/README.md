# objective
- 這是一個英雄造時勢的練習
- 活用window.scrollY, window.innerHeight, offsetTop就可以使視窗在任意位置下觸發transition，這不是造時勢，什麼才是造時勢！



<br>

# note
### 任何時刻視窗高度
- window.scrollY


### 任何時刻視窗底部的高度
- const sliderInAt = (window.scrollY + window.innerHeight);


###  設定圖片出現的範圍
- 視窗底部到圖片的一半出現
- 視窗超過圖片底部隱藏

```
const isHalfShown = sliderInAt > sliderImage.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;
if(isHalfShown && isNotScrolledPast){
  sliderImage.classList.add('active');
} else {
  sliderImage.classList.remove('active');
}
```

<br>

# New Discover
### scrollY
- syntax: var y = window.scrollY
- The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.

### innerHeight
- Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.



### offsetTop
- syntax: topPos = element.offsetTop;
- The HTMLElement.offsetTop read-only property returns the distance of the current element relative to the top of the offsetParent node.


### debounce()
- debounce是空闲时间的间隔控制，是空闲时间必须大于或等于一定值的时候，才会执行调用方法。
- 比如我们做autocomplete，这时需要我们很好的控制输入文字时调用方法时间间隔。一般时第一个输入的字符马上开始调用，根据一定的时间间隔重复调用执行的方法。对于变态的输入，比如按住某一个建不放的时候特别有用。
- debounce主要应用的场景比如：文本输入keydown 事件，keyup 事件，例如做autocomplete
```
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
