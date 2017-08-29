# Objective
- 與video的親密接觸，設計基本的功能，play, pause, skip, progress, volume
<br>


# Note
### handleRangeUpdate()
```
function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(video); //html裡的  video
  console.log(this.name); //這裡是volume
  console.log(video.volume);  // video的聲音值
  console.log(video[this.name]); // [this.name] == .volume  
}
```


### parseFloat() Function
- The parseFloat() function parses a string and returns a floating point number.
- 因為dataset.skip是string故加上parseFloat function.
```
function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip)
}
```


### 拖拉video currentTime
- 跟上一個canvas作業一樣
- 要做的事情有三樣，
  - 點擊跳到該進度，
  ```
  progress.addEventListener('click' , scrub);
  ```

  - 判斷是否按下滑鼠鍵不放
  ```
  let mousedown = false;
  progress.addEventListener('mousedown' , () => mousedown = true);
  progress.addEventListener('mouseup' , () => mousedown = false);

  ```

  - 當滑鼠鍵按下不放，執行scrub()
  ```
  progress.addEventListener('mousemove' , (e) => mousedown && scrub(e));
  ```

- 整個程式碼：
```
let mousedown = false;
progress.addEventListener('click' , scrub);
progress.addEventListener('mousemove' , (e) => mousedown && scrub(e));
progress.addEventListener('mousedown' , () => mousedown = true);
progress.addEventListener('mouseup' , () => mousedown = false);
```
<br>


# Discover
<br>
## Video/Audio
  ### Audio/Video Methods
  - load()	Re-loads the audio/video element
  - play()	Starts playing the audio/video
  - pause()	Pauses the currently playing audio/video


  ### Audio/Video Properties
  - paused:	Returns whether the audio/video is paused or not
  - currentTime:	Sets or returns the current playback position in the audio/video (in seconds)


  ### Audio/Video Events
  - pause:	Fires when the audio/video has been paused
  - play:	Fires when the audio/video has been started or is no longer paused
  - timeupdate:	Fires when the current playback position has changed
  <br>


### dataset
- date-* , 可以依需求自己設attribute
- 呼叫再用'[data-* ]'即可，例
```
const skipButtons = player.querySelectorAll('[data-skip]');
```


### offsetX & offsetWidth
- 滑鼠相對於事件源元素（srcElement）的X,Y坐標，只有IE事件有這2個屬性，標準事件沒有對應的屬性。

原文網址：https://kknews.cc/zh-tw/news/r3pzzr.html
- The offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node.
