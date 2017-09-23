# Objective
- 因為setInterval有一些缺點無法正確的讀秒，因此另外設計一個方法。
- 假設要倒數10秒，做法是取現在的時間加上10秒存進then，setInterval每秒讀取現在時間(也可以說每秒修正現在時間)，只要現在時間一小於then，代表時間到。


<br>
# Note
### setInterval的缺點
- 設計倒數計時很直覺的會想要用setInterval()，但這裡不用setInterval因為他其實只是保證一秒之內不執行所以有可能會大於一秒。
- 另外在有些情況會讓他暫時停時例如ＩＯＳ滑動的時候
- 比如在倒數第3秒延遲了，後面每個秒數都會延遲。




### timer()
```
let countdown;

function timer(seconds){
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }
     displayTimeLeft(secondsLeft);
  }, 1000);
}
```
- ```  clearInterval(countdown);``` 這個概念之前一直用過，就是當我的function在執行中時再執行一次必須取消上一次執行。
- ```displayTimeLeft(seconds);``` 假設要倒數10秒，會顯示9 8 7...，但希望是顯示10 9 8 7...，所以要先執行一次，setInterval每秒再呼叫一次。
- ```clearInterval(countdown);
return;``` 當時間到取消setInterval，不然會在背景一直執行。
- 下面還有，為了方便解釋獨立出來




### then - now
- **這是最核心的部分**
```
const now = Date.now();
const then = now + seconds * 1000;
```
- 假設要倒數10秒，做法是取現在的時間加上10秒存進then，setInterval每秒讀取現在時間(也可以說每秒修正現在時間)，只要現在時間一小於then，代表時間到。
- ```secondsLeft < 0``` 不能小於等於0，因為希望畫面上出現0。




### displayTimeLeft()
- 顯示倒數時間
- ```${remainderSeconds < 10 ? '0' : ''}``` 秒數小於10顯示 09 08 07...
- 假設要倒數10秒，會顯示9 8 7...，但希望是顯示10 9 8 7...，所以要在timer裡的前面先執行一次。
- ```document.title = display;``` 還可以改title喔～




### Form
```
document.customForm.addEventListener('submit' , function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset()
})
```
- 小技巧：document.[name] 等同於 document.querySelector('name')
- 要記得Form 的Event是submit!!!!!
- preventDefault()可以防止網址出現提交的值，使之成功提交
- 用Form記得用reset()





<br>
# New Discover
### Date()
- 因為忘了所以重寫一次
- 會顯示現在時間Fri Sep 22 2017 14:09:41 GMT+0800 (CST)
- 如果，Date(1506061047450)，會轉換成上面的時間格式。

### Date.now()
- Date.now() 方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。


### .get各種日期
```
var x = new Date();
x.getDate() // 22
```
- 可以用各種方式取得各種時間

### scope.clearInterval(intervalID)
- The clearInterval() method of the WindowOrWorkerGlobalScope mixin **cancels a timed, repeating action** which was previously established by a call to setInterval().
