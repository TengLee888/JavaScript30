# Objective
- Sort array without a, an, the
- And put the sorted array to html


<br>
# Note
```
const sortedbands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
```
- 這個的厲害之處在```strip(a) > strip(b) ? 1 : -1```，排列是根據這行的判斷式排列


<br>
# New Discover

### RegExp
- ^ : 匹配輸入的開頭，如果 multiline flag 被設為 true，則會匹配換行字元後。例如：/^A/ 不會匹配「an A」的 A，但會匹配「An E」中的 A。



### String.trim()
- 從目前的 String 物件中移除所有的開頭和結尾空白字元。
