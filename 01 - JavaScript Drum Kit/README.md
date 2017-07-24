# Objective
- 練習監聽事件, 函式等等
<br>
<br>

# Note

- 對window進行監聽，當有event‘keydown’發生，則執行playSound function
```
function playSound: {
  const audio //為了接收下面的程式碼, e.keyCode就是代表按鍵的數字
  <audio data-key="65" src="sounds/clap.wav"></audio>

  const key //為了接收下面的程式碼
  <div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
  </div>
  if (!audio) return; //當audio 沒有接收到對的keyCode，return．
  audio.currentTime = 0;  //為了連續按按鍵, 當重複按按鍵currentTime = 0
  key.classList.add("playing");  //add playing for css transform
}
```
<br>


- 為了要把特效移除，所以對所有key進行監聽，當transitionend發生則把.playing移除
```
const keys = document.querySelectorAll('.key'); //先把每個key弄成物件
function removeTransition{
  if (e.propertyName !== "transform") return; //if element didnt transform, return
  this.classList.remove("playing"); // if element transform is ended, remove .playing
}
```
<br>
<br>



# New Discover

### querySelectorAll()

```
elementList = document.querySelectorAll(selectors);
```

- The returned NodeList will contain all the elements in the document that are matched by any of the specified selectors.
- **記得回傳的是NodeList**
<br>


### forEach()
- listen every single key in array keys, when transition end execute function removeTransition.
<br>


### play()
- playing the audio/video
<br>


### classList.add()
- add class
<br>


### addEventListener
- Has different interface like keyboardEvent, mouseEvent, transitionEvent...
- **keyCode = 按鍵的代碼**
