# 運行架構
讀取時間，再把時間換算成角度更新至css
- 每秒執行setInterval,1000為毫秒
  ```
  setInterval(setDate , 1000);
  ```

- 用date()讀取現在時間指定至now, 藉由函式getSeconds()得到“秒”
```
var now = new Date() // Fri Jul 21 2017 15:44:36 GMT+0800 (CST)
var sec = now.getSeconds();
```

- 設置變數傳入秒,分,時的程式碼, 為改變style

  ```
  const hourHand = document.querySelector(".hour-hand");
  \\<div class="hand hour-hand"></div>
  const minsHand = document.querySelector(".min-hand");
  \\<div class="hand min-hand"></div>
  const secondHand = document.querySelector(".second-hand");
  \\<div class="hand second-hand"></div>
  ```

- 修正秒針的角度
```
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
```

- 當秒針從59 -> 60, 秒針會從60倒退至0, 故取消transition
```
secondHand.style.transition = 'none'
```

# 新東西
### setInterval()
- calls a function or evaluates an expression at specified intervals (in milliseconds)


### new Date()
- 建立一個  JavaScript Date 物件來指向某一個時間點。Date 物件是基於世界標準時間（UTC） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。
