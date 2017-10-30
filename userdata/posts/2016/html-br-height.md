title: html 的 br 标签会占多高？
date: 2016-03-15 8:00:01
updated:
---

<!-- more -->

经过一番无聊的测试之后，`<br/>` 的高度等于它父级元素的行高 `line-height`，没有兼容问题。如果有使用的可能的话应该在浮动元素上吧。

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>关于&lt;br/&gt;的高度问题</title>
<style>
* {margin:0;padding:0;}
body {
  line-height:30px;
  font-size:12px;
}
.cut {
  clear:both;
  height:30px;
  line-height:30px;
  background-color:black;
  color:white;
  text-align:center;
  opacity:.5;
  filter:alpha(opacity=50);
}
.div1, .div2 {
  background-color:rgb(185,96,14);
  line-height:18px;
}
.floatdiv {
  float:left;
  background-color:rgb(185,96,14);
  line-height:30px;
}
.span1, .span2 {
  background-color:rgb(185,96,14);
  /*display:inline-block;*/
}
.div3 {
  line-height:50px;
  background-color:rgb(185,96,14);
}
:root .innerdiv1, :root .innerdiv2 {
  line-height:22px;
  color:black;
  filter:none;/*处理IE9浏览器中的滤镜效果*/
  background-color:rgba(0,0,0,0.5);
}
.innerdiv1, .innerdiv2 {
  line-height:22px;
  color:black;
  filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr='#7F000000', endColorstr='#7F000000');
}
</style>
</head>
<body>
    <div class="div1">块级元素</div>
    <br/>
    <div class="div2">块级元素</div>

    <div class="cut">分割线</div>

    <div class="floatdiv">
        左浮动<br/>
        左浮动2
    </div>
    <br/>
    <div class="floatdiv">
        左浮动
    </div>

    <div class="cut">分割线</div>
    <span class="span1">行内元素</span>
    <br/><br/>
    <span class="span2">行内元素</span>
    <div class="cut">分割线</div>

    <div class="div3">
    <div class="innerdiv1">div内</div>
    <br/>
    <div class="innerdiv2">div内</div>
    </div>

    <div class="cut">分割线</div>
</body>
</html>
```
