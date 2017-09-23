# Objective
- 練習設計打地鼠的小遊戲！！


<br>


# Note
### 取得一範圍的整數
```
Math.round(Math.random() * (max - min) + min);
const idx = Math.floor(Math.random() * holes.length);
```   
- 要random的值乘以Math.random()就好
- 視需求再用floor()或round()


### randomHole()
```
let lastHole;

function randomHole(holes){
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole){
    console.log('again');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
```
- ```const hole = holes[idx];```  這個寫法就可以在array出現任意元素


### 防止random連續出現同樣數字
```
let lastHole;

if(hole === lastHole){
  console.log('again');
  return randomHole(holes);
}
lastHole = hole;
return hole;
```
- 先設```let lastHole;```，hole存進lastHole
- if判斷式可以防止重複出現數字，最後要寫return peep();



### button的startGame
```
<button onClick="startGame()">Start!</button>
```
- onClick="startGame()" 這樣寫就直接執行了！


### 防止cheater
- ```if(!isTrusted) return;``` 防止操作者用“模擬click”


### score
- 我自己寫的時候只有score++ 這行而已，但教學還增加了兩次score = 0;，是更也保障的寫法。

<br>

# New Discover

### WindowOrWorkerGlobalScope.setTimeout()
- 忘了有這個funciton還想用setInterval所以再寫一次


### Event.isTrusted
- Event 介面的 isTrusted 唯讀屬性為一個布林值，若事件物件是由使用者操作而產生，則 isTrusted 值為 true。若事件物件是由程式碼所建立、修改，或是透過 EventTarget.dispatchEvent() 來觸發，則 isTrusted 值為 false。
