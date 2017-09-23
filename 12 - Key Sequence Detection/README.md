# Object


<br>

# Note
### 把鍵盤的key加入array
```
const pressed = [];
window.addEventListener('keyup' , (e) => {
  pressed.push(e.key);
})
```


### 使pressedCode array
- 一直保留最新也就是array後面的自串```-secretCode.length - 1```
- 維持secretCode.length ```pressed.length - secretCode.length```
- 原始碼
```
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```


<br>

# New Discover
### e.property
  - e.key: 不會對esc, F1~F12, power, tab, 按下產生caps lock的caps lock, fn 監聽


### join()
- syntax: array.join(separator)
- array.join(' '); 這樣就是把array連起來並有空格．

### includes()
- The includes() method determines whether an array includes a certain element, **returning true or false** as appropriate.


### 一個熱愛unicorn和彩虹的天地
- http://www.cornify.com/
