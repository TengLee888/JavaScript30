# Objective
- 設計playbackRate
- bar百分比的寫法

<br>

# Note
```
const y = e.pageY - this.offsetTop;
```
- 不加this.offsetTop會從148px開始算起

```
const playbackRate = percent * (max - min) + min;
```
- 含有最大值及最小值的百分比寫法


<br>

# New Discover
### Math.round()
- 四捨五入


### Number.prototype.toFixed()
- The toFixed() method formats a number using fixed-point notation.
