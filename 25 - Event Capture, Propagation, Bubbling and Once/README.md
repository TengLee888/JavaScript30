# Objective



<br>
# Note
### capture: ture
- 還沒有加這個之前，印出來的是three two one
- 加了```capture: ture``` ，印出來的是one two three
- 因為他執行的程序是capture down


### e.stopPropagation();
- 就印出click的div
- 因為他不bubble up


### once: true
- 等同於 ```div.removeEventListener('click' , logtext, capture?: boolean)```
- 意思就是只監聽一次就移除
- **用在button很實用!!!**

<br>
# New Discover
### capture: true
- function is not get run on the bubble up, it is get run on the capture down
- run the function on the way down rather than on the way up


### e.stopPropagation();
- stop bubbling


### once: true
-
