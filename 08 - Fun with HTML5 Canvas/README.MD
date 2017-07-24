# Objective
- Happy Drawing Canvas
<br>
<br>


# Note
- 以下就像初始化的設定
```
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');  //returns an object that provides methods and properties for drawing on the canvas.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';  //color, gradient, or pattern used for strokes
ctx.lineJoin = 'round'; //the type of corner created, when two lines meet
ctx.lineCap = 'round';  //the style of the end caps for a line
ctx.lineWidth = 1;  
// ctx.globalCompositeOperation = 'multiply'; //筆畫的顏色會重疊
```
<br>


- function draw
  - ctx.beginPath();
      - 啟動
      - Begins a path, or resets the current path
  - ctx.moveTo(lastX , lastY);  
    - moveTo() 起點
    - Moves the path to the specified point  
  - ctx.lineTo(e.offsetX , e.offsetY);
    - 終點
    - Adds a new point and creates a line to that point
  - ctx.stroke();
    - 連接moveTo()和lineTo()
    - Actually draws the path you have defined
  - [lastX , lastY] = [e.offsetX , e.offsetY];
    - 把這一刻滑鼠移動到的位置offset傳給[lastX , lastY]，當滑鼠移到下一刻的offset時，stroke()再把last和offset連起來

<br>



- 當滑鼠mouseup或mouseout要"停筆"，因此先設isDrawing = false，mousedown才等於true，mouseup mouseout等於false

```
canvas.addEventListener('mousedown' , ()=> isDrawing = true);
canvas.addEventListener('mouseup' , ()=> isDrawing = false);
canvas.addEventListener('mouseout' , ()=> isDrawing = false);

if(!isDrawing) return;
```
<br>


- 製作顏色變化
```
let hue = 0;
hue++;
if (hue >= 360) {hue = 0;}
```
<br>


- 製作筆畫大小變化，這個寫法我覺得不錯
  - 把lineWidth >= 100 與 lineWidth <=1 視為同一種trigger，當碰到時就改變increaseWidth的狀態．
  - 設```let increaseWidth = true```，當increaseWidth = true就增加lineWidth，反之減少．
```
if(ctx.lineWidth >= 100 || ctx.lineWidth <=1){
  increaseWidth = !increaseWidth;
}
if(increaseWidth){ctx.lineWidth++;}
else
{ ctx.lineWidth--;}
```
<br>
<br>



# New Discover
### window.innerWidth
- Example

```
// This will return the width of the viewport
var intFrameWidth = window.innerWidth;

// This will return the width of the frame viewport within a frameset
var intFrameWidth = self.innerWidth;

// This will return the width of the viewport of the closest frameset
var intFramesetWidth = parent.innerWidth;

// This will return the width of the viewport of the outermost frameset
var intOuterFramesetWidth = top.innerWidth;
```
