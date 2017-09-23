# Objective



<br>
# Note
```
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
```
- 這似乎是常用的做法，createElement => document.querySelector => appendChild()


```
recognition.addEventListener('result' , e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
```
- 這一連程式碼就是篩選出transcript的value
- .map(result => result[0]) 這行是用來簡化存入的東西，還沒寫這行e.results包含isFinal和length。現只把transcript 和 confidence存在Array。
- .map(result => result.transcript) 本來有transcript 和 confidence存在Array，現只存本來有transcript的value


```
recognition.addEventListener('end' , recognition.start);
```
- 重新啟動recognition



```
if(e.result[0].isFinal){
  p = document.createElement('p');
}
```
- 當句子結束時isFinal = true，利用這個來新增一個段落
- let的好處在這裡 可以新增一個句子。
<br>
# New Discover
### SpeechRecognition
- The SpeechRecognition interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.


### createElement()
- 於 HTML 文件中，Document.createElement() 方法可以依指定的標籤名稱（tagName）建立 HTML 元素
- 常用的做法，createElement => document.querySelector => appendChild()



### SpeechRecognition.start()
- The start() method of the Web Speech API starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
