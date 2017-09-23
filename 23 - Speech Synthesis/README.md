# Objective
- 練習Speech Api


<br>

# Note
## msg
- ```const msg = new SpeechSynthesisUtterance();``` 先新增一個物件，存入msg。
- msg.text裡存入輸入的文字，裡面也有各種設定，如msg.voice, msg.rate, msg.pitch，用DOM.querySelector.addEventListener('change' , Function)**把關係建立起來就可以調整輸入的文字發聲了！！**
- ```msg.text = document.querySelector('[name="text"]').value;``` textarea的value就存入msg.text


<br>

### populateVoices()
- 呈現聲音給使用者選擇
```
let voices = []; //新增array
const voicesDropdown = document.querySelector('[name="voice"]');

function populateVoices(){
  voices = this.getVoices(); //把各種預設的聲音存入array
  //呈現在網頁的option
  voicesDropdown.innerHTML = voices
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})`)
  .join('');
}

speechSynthesis.addEventListener('voiceschanged' , populateVoices);
```
- voice的設定比較複雜，要讓```speechSynthesis.getVoices()``` 發生，把各種預設的聲音存入前面新增的voices=[]，然後呈現在網頁的option，給使用者選擇option裡的某個聲音．
- 另外我註解掉filter()，因為我覺得沒有filter比較好玩


<br>

### setVoice()
- 當使用者選了option的某個聲音，setVoice()就用該聲音發聲
```
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value); 把使用者選擇的聲音選出來
  toggle(); //發出聲音
}

voicesDropdown.addEventListener('change' , setVoice);
```


<br>

### setOption()
- 當使用者調整rate, pitch, textarea，把它呈現出來
```
const options = document.querySelectorAll('[type="range"], [name="text"]');

function setOption(){
  msg[this.name] = this.value;
  toggle();
}

options.forEach(option => option.addEventListener('change' , setOption));
```

- 對物件options進行監聽，因為要監聽三個，所以用forEach
- msg[this.name]，
  - 先看this代表什麼，代表```<input name="rate" type="range" min="0" max="3" value="1" step="0.1">```
  - this.name代表 rate
  - msg[this.name]代表msg[rate]，這是在關聯式容器的一個表示方式，意思是obj[key]就代表value



<br>

### toggle()
- 當使用者按speak btn發聲，按stop停止
```
function toggle(startOver = true){
  speechSynthesis.cancel();
  if(startOver){
    speechSynthesis.speak(msg);
  }
}

speakButton.addEventListener('click' , toggle);
stopButton.addEventListener('click' , () => toggle(false))
```

- 前面放了```speechSynthesis.cancel();``` 所以每觸發一次toggle function就會中斷之前的聲音，這跟第一天練習中斷按鍵聲一樣，所以我們可以說，**當function會執行比較久的東西，可以先寫一個中斷的程式碼**
- 值得注意的是 **預設參數** 的用法，方法是在function的()裡寫startOver = true，等同於
```
function toggle(startOver){
  startOver = startOver||true
  ...
}
```

- ```() => toggle(false)``` 也可以寫成這樣 ```toggle.bind(null , false);```


<br>

### background-image
- 還蠻屌的
```
background-image:
radial-gradient(circle at 100% 150%, #3BC1AC 24%, #42D2BB 25%, #42D2BB 28%, #3BC1AC 29%, #3BC1AC 36%, #42D2BB 36%, #42D2BB 40%, transparent 40%, transparent),
radial-gradient(circle at 0    150%, #3BC1AC 24%, #42D2BB 25%, #42D2BB 28%, #3BC1AC 29%, #3BC1AC 36%, #42D2BB 36%, #42D2BB 40%, transparent 40%, transparent),
radial-gradient(circle at 50%  100%, #42D2BB 10%, #3BC1AC 11%, #3BC1AC 23%, #42D2BB 24%, #42D2BB 30%, #3BC1AC 31%, #3BC1AC 43%, #42D2BB 44%, #42D2BB 50%, #3BC1AC 51%, #3BC1AC 63%, #42D2BB 64%, #42D2BB 71%, transparent 71%, transparent),
radial-gradient(circle at 100% 50%, #42D2BB 5%, #3BC1AC 6%, #3BC1AC 15%, #42D2BB 16%, #42D2BB 20%, #3BC1AC 21%, #3BC1AC 30%, #42D2BB 31%, #42D2BB 35%, #3BC1AC 36%, #3BC1AC 45%, #42D2BB 46%, #42D2BB 49%, transparent 50%, transparent),
radial-gradient(circle at 0    50%, #42D2BB 5%, #3BC1AC 6%, #3BC1AC 15%, #42D2BB 16%, #42D2BB 20%, #3BC1AC 21%, #3BC1AC 30%, #42D2BB 31%, #42D2BB 35%, #3BC1AC 36%, #3BC1AC 45%, #42D2BB 46%, #42D2BB 49%, transparent 50%, transparent);
background-size:100px 50px;
```




<br>

# New Discover
### SpeechSynthesisUtterance()
- The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

## SpeechSynthesis
- The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
- **Property**
  - SpeechSynthesis.paused
  - SpeechSynthesis.pending
  - SpeechSynthesis.speaking
- **Method**
  - SpeechSynthesis.cancel()
  - SpeechSynthesis.getVoices()
  - SpeechSynthesis.pause()
  - SpeechSynthesis.resume()
  - SpeechSynthesis.speak()

### voiceschanged
- Web Speech API
- The list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)


### change (Event reference)
- Event Type: DeviceStorageChangeEvent
- This event is triggered each time a file is created, modified or deleted on a given storage area.
- The change event is fired for **input, select, and textarea**  elements when a change to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.


### Array.prototype.find()
- find() 方法，如果一個在陣列中的元素滿足提供的測試函數，則返回一個在陣列中的值。否則回傳 undefined。

也可以參考 findIndex() 方法，它回傳被找到的元素在陣列中的索引，而不是它的值。


### bind()
```
toggle.bind(null , false);
```

- bind() 方法建立一個新的函數，被呼叫時會將 this 關鍵字設為提供的值，並以一序列的引數作為新函數呼叫時的前導引數。

### inline function
