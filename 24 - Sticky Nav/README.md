# Objective
- 當畫面捲動觸發各種事件


<br>
# Note
### nav離畫面多高
```
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
```
- 先取nav離畫面多高的值，```const topOfNav = nav.offsetTop;```

### fixNav()
```
window.addEventListener('scroll' , fixNav)

function fixNav (){
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
```
- 當畫面捲動，執行fixNav()
- 判斷式```if(window.scrollY >= topOfNav)``` 被滿足，body則加上fixed-nav。
- 但nav加了position: fixed 畫面會往上跳，所以
  - 加上這行```document.body.style.paddingTop = nav.offsetHeight + 'px';```

### 其他觸發
```
.fixed-nav li.logo{
  max-width: 500px;
}

.fixed-nav  .site-wrap{
  transform: scale(1);
}
```
- 這兩個都是在body加上class之後被觸發，也就是說，在程式碼設計上增加一個class它的子元素都可以透過css寫```新增的class 要被觸發的DOM```被觸發
  - 比如```.fixed-nav li.logo .fixed-nav  .site-wrap```
