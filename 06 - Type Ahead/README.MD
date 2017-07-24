# Objective
- 把json格式的資料篩選，呈現在網頁，超實用，超ROCK!!!!
<br>
<br>

# Note
- 將網址中的json格式的資料轉成物件傳入cities array
  - 使用fetch()，連結HTTP，然後回傳一個promise
  - .then，promise的寫法
  - ```.then(blob => blob.json())```，blob目前還是raw data，他可能是HTML，照片等，使用blob.json就可以指定為json的格式，回傳一個物件．
  ```
  Object
  city:"New York"
  growth_from_2000_to_2013:"4.8%"
  latitude:40.7127837
  longitude:-74.0059413
  population:"8405837"
  rank:"1"
  state:"New York"
  __proto__:Object
  ```
  - ```.then(data => cities.push(...data))```把每個物件傳到陣列裡．
    - 如果這樣寫```.then(data => cities = data)```除非cities是var或let，不然會出現errow．因為這個寫法是修改citites指向的位子，根據const的權限所以為const會失效．因為push是往陣列後面加元素，因此可以使用．
    ```
     fetch(endpoint)
       .then(blob => blob.json())
       .then(data => cities = data)
    ```
<br>  


- 把鍵盤輸入的值放進displayMatches function，用this.value代表輸入的值
```
const searchInput = document.querySelector('.search');
searchInput.addEventListener('keyup' , displayMatches);
function displayMatches (){
  const matchArray = findMatches(this.value , cities);
}
```
<br>


- 把this.value對陣列cities篩選
  - ```cities.filter(place => {}```，用filter()篩選符合測驗函數的元素
  - ```const regex = new RegExp(wordToMatch , 'gi');```把輸入的值轉為正規表達式，當輸入小寫也可以找到陣列中的大寫
  - ```place.city.match(regex) || place.state.match(regex)```，用match()讓regex去比對cities中每一個元素place
<br>


- 將篩選好的matchArray使用map()加工再用replace()ㄕhighlight
  - Highlight
    - ```const regex = RegExp(this.value , 'gi');```，讓this.value變為RegExp，另外這個this.value是從displayMatches傳入，和findMatches裡的RegExp無關因此這裡也要使用RegExp．
    - ```place.city.replace(regex , `<span class="hl">${this.value}</span>`);```使用replace()把替換成有hl class的<span>
    <br>

- numberWithCommas，網上有別人寫好的function，帶入即可．
- .join('')，把每個```<li>...</li>,<li>...</li>```連在一起，不然中間會有逗號．
<br>


- 用innerHTML把return的html呈現在網頁上
```
const suggestions = document.querySelector('.suggestions');
...suggestions.innerHTML = html;
```
<br>
<br>

# New Discover
### fetch()
- Fetch API  提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。
- fetch 和 then 都會回傳**promise**
<br>


### push()
- push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
<br>


### RegExp
- 正規表達式是被用來匹配字串中字元組合的模式。在 JavaScript 中，正規表達式也是**物件**，這些模式在 RegExp 的 exec 和 test 方法中，以及 String 的 match、replace、search、split 等方法中被運用。
- g=>global，i=>insensitive，在這題，如不用RegExp，輸入小寫則找不到陣列中的大寫
<br>


### join()
- join method joins the element of an array into a string, and returns a string. '' is combine element and element to a string.
<br>


### innerHTML
innerHTML property sets or returns the HTML content (inner HTML) of an element.
