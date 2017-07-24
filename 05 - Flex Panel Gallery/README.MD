# Objective
- 練習為HTML加上class
<br>
<br>

# Note
- 先對欲改變的panel做成一個obj, panels
- 再對panel監聽, addEventListener('click', )
- 對this```<div class="panel panel1">...</div>```，使用toggle method就可以加上或移除open
- 當open結束時加上open-active，方法是
  - 用addEventListener('transitionend' , )對panel監聽
  - 當TransitionEvent結束時，加上open-active
  ```
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
  ```
<br>
<br>



# New Discover
## CSS
### box-shadow
- Well, I like the way of box-shadow in css panels
```
box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
```
<br>


### css operator
- * , Selects all elements
- div > p , Selects all <p> elements where the parent is a <div> element
- .panel > * :first-child, all first child of .panel
- p:nth-child(2), the second child of <p>
<br>


### toggle()
- The first parameter removes the specified class from an element, and returns false.
If the class does not exist, it is added to the element, and the return value is true.
  - 所以function toggleOpen和toggleActive 可以寫成這樣
  ```
  function togglePanel() {
    if(this.classList.toggle("open")) {
      this.classList.add("open-active")
    } else {
      this.classList.remove("open-active")
    }
  }
  ```
