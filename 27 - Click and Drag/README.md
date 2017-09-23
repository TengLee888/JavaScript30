# Objective
- 練習翻相簿呈現方式


<br>

# Note
### isDown
- 跟之前一樣，在global設一個變數代表狀態的改變
- 這方法要記起來


### startX
- 原本以為設offsetX就好了，但e.offsetX會讀到item的offsetX，並不是items的offsetX


### 滑鼠移動多少
```
startX = e.pageX - slider.offsetLeft; //取得mousedown的位置
const x = e.pageX - slider.offsetLeft // 取得每一次mousemove的位置
const walk = x - startX; // 相減得知移動距離
```
- 取得mousedown的位置
- 取得每一次mousemove的位置
- 相減得知移動距離

### scrollLeft的妙用
```
scrollLeft = slider.scrollLeft; (mousedown)
slider.scrollLeft = scrollLeft + walk; (mousemove)
```
- 如果```slider.scrollLeft = walk;``` 第二次滾動頁面walk會重新等於1,2,3...，slider.scrollLeft等於1,2,3...，所以頁面會跳到最左邊
- 所以在mousedown就讀取當前slider.scrollLeft，並把這個數值帶進移動位置。
- I change - to +, i prefer it


<br>

# New Discover
## CSS
### cursor: grabbing
- 游標點下變抓

## JS
### event.preventDefault()
- 取消事件的默认动作。
- 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。
