---
title: 前端备忘
date: 2016-03-15 8:00:00
updated:
---

<!-- more -->

1. 当window.onload的时候火狐不加载dislilay:none的元素，chrome 加载页面上dislilay的元素(记得是加载图片，还有版本更新可能会不同)
2. 移动端：手指点击一个元素的时候 如果不点击屏幕上其他的东西 会一直发生 :hove 和 mouseover 事件
3. 瀑布流的动态加载内容时，滚动条增加会触发ie6的window.onresize
4. 在ie 9 10 中不能 设置audio标签的 高度。 宽度不能设置太小 ，否则audio 标签不显示
5. 输入框不可用的三种方式
  ```html
  <!--  input 不可用的三种情况 -->
  <input type="text" readonly="readonly" value="hello" />
  <input type="text" disabled="disabled" value="hello" />
  <input type="text" onfocus="this.blur()" value="hello" />
  ```
6. ie6的 `position: fixed`
  ```html
  <style>
  * html,* html body {background-image:url(about:blank);background-attachment:fixed;}
  *{padding:0; margin:0;}
  .aa{height:1000px; background:#ccc;}
  .bb{position:fixed; right:0; bottom:0px; _margin-bottom:0px; width:100px; height:100px; background:#000;
  _position:absolute;
  _bottom:auto;
  /*_top:expression(eval(document.documentElement.scrollTop));顶部*/
  _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-

  (parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));/*底部*/}
  </style>
  <script>
    var ie6=!-[1,]&&!window.XMLHttpRequest;
    if(ie6){
        ifm.style.position="absolute";
        if(json.vPosition == 1){
            ifm.style.top="0";
            var funcmy=function (){
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                ifm.style.top=5+scrollTop+'px';
            }
            funcmy ();
        } else if(json.vPosition == 2){
            
            var funcmy=function (){
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                
                ifm.style.top=(document.documentElement.clientHeight-json.height)/2+scrollTop+'px';
            }
            funcmy ();
            
        } else if(json.vPosition == 3){
            ifm.style.bottom="0";
            var funcmy=function (){
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
                ifm.style.top=document.documentElement.clientHeight-ifm.offsetHeight-3+scrollTop+'px';
            }
        }
        var oldonscroll = window.onscroll;
        if (typeof window.onscroll != 'function') {
            window.onscroll = funcmy;
        } else {
            window.onscroll = function() {
                oldonscroll();
                funcmy();
            }
        }
    }
  </script>
  ```
  完美的解决方案是增加一层元素里面滚动
  ```css
  /* IE6浏览器的特有方法 */
  * html,* html body{background-image:url(about:blank); background-attachment:fixed}/* 修正IE6抖动bug */
  * html .ie6fixedTL{position:absolute;left:expression(eval(document.documentElement.scrollLeft));top:expression(eval(document.documentElement.scrollTop))}/* 固定在左上角的固定层 */
  * html .ie6fixedBR{
  position:absolute;
  left:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth-this.offsetWidth)-(parseInt(this.currentStyle.marginLeft,10)||0)-(parseInt(this.currentStyle.marginRight,10)||0));
  top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));
  }/* 固定在右下角的固定层 */
  ```
  上面是写在样式中的，也可以使用js添加方式是
  ```javascript
  obj[0].style.setExpression("top", 'eval('+ dom + '.scrollTop + ' + obj.offset().top + ') + "px"');
  //参考网址是http://wangjianjun.github.io/ie6fixed/index.html ie6fixed的一个js
  ```
7. onclick 点击执行的顺序
```html
<ul onclick="alert(3)">
  <li onclick="alert(2)"><a href="javascript:alert(4);" onclick="alert(1)" target="_blank">点击</a></li>
</ul>
```
8. 文本框textarea 适应输入文字的高度
```html
<textarea style="overflow-y:hidden;height:80px;" onpropertychange="this.style.height=this.scrollHeight+'px';" oninput="this.style.height=this.scrollHeight+'px';"></textarea>
```

9. (1)事件冒泡每一个事件都会冒泡，冒泡的的元素是从子元素冒泡到父元素，和元素的位置没有关系。
 (2)当鼠标从一个元素 移入 到其子元素 中会先触发，自身的的onmouseout事件一次，然后触发子元素的onmouseover，然后onmouseover事件在冒泡到自己身上。

10. 这里会输出5，因为两个H 就是两个字符 (一个是%CE%97，一个是H) 可以分别复制两个H 用字符串的'H'.charCodeAt(0) 72 'Η'.charCodeAt(0) 919 查看。
```javascript
var H = 3; var Η = 2; console.log(Η + H);
```
11. iOS 事件点击穿透的问题用 pointer-events:none 来解决。
12. javascript 获取服务器时间
```javascript
var myXHR=null;//ajax对象
if(window.ActiveXObject){
  myXHR=new ActiveXObject("Microsoft.XMLHTTP");
}else{
  myXHR=new XMLHttpRequest();
}
myXHR.onreadystatechange=function(){
  if(myXHR.readyState == 4){
    var servertime=new Date(myXHR.getResponseHeader('Date'));
    alert(servertime.getFullYear());
    alert(servertime.getMonth()+1);
    alert(servertime.getDate());
  }
};
//http://www.paulirish.com/2010/the-protocol-relative-url/
myXHR.open("HEAD","//"+document.domain,true);
myXHR.send(null);
```

13. js关闭页面 (IE下)
```html
<a href="#" onclick="window.opener=null;window.open('','_self');window.close();" >不确认关闭 </a>
<a href="#" onclick="window.close();" >确认关闭 </a>
```

14. 图片没加载前的loding 背景图
```html
<img src="about:blank" style="background: url(data:image/gif;base64,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) center center no-repeat;" />
```

15. 低版本 ie 空标签 不能 在flash 层上显示。给空元素加上背景色， 元素透明处理 background-color:red; filter:alpha(opacity=0); opacity:0;

16. ie6 border透明（记录一下还没测试过）
```css
.class {
  border:solid 1px transparent; 
  _border-color:tomato; 
  _filter:chroma(color=tomato); 
}
```
 说明： 1.IE6及更早浏览器只有background-color接受transparent取值。 2.IE7及IE8除了background-color，还有border-color也开始接受transparent取值。 3.Chroma属性可以设置一个对象中指定的颜色为透明色，它的表达式如下： Filter：Chroma（color=color） 这个属性的表达式是不是很简单，它只有一个参数。只需把您想要指定透明的颜色用Color参数设置出来就可以了。 对IE6,先设置border-color为某种不常用的颜色，然后用IE特有的css滤镜使该颜色为透明。

17. Chrome渲染Transition时页面闪动Bug
 -webkit-backface-visibility: hidden;（设置进行转换的元素的背面在面对用户时是否可见：隐藏） -webkit-transform-style: preserve-3d; （设置内嵌的元素在 3D 空间如何呈现：保留 3D ）
18. ie浏览器 主要是 ie6 行高 和 字符 上面 和 现代浏览器的 理解不一样 好多 问题 把父元素的 line-height:0;font-size:0; 加上 然后在 子元素中设置行高和 字体大小 就能决绝 莫名其妙的 问题了。

19. 移动端 meat 标签
```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection"content="telephone=no, email=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) http://se.360.cn/v6/help/meta.html -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 适应移动端end -->
```
20. 元素有个click属性，值是个函数。如果执行该函数，就相当于点击了一下这个元素。IE6+ 
21. input里面的输入光标大小[原文地址](http://www.cnblogs.com/mofish/archive/2011/03/24/1993552.html)
 IE：不管该行有没有文字，光标高度与font-size一致。FF：该行有文字时，光标高度与font-size一致。该行无文字时，光标高度与input的height一致。 Chrome：该行无文字时，光标高度与line-height一致；该行有文字时，光标高度从input顶部到文字底部(这两种情况都是在有设定line-height的时候)，如果没有line-height，则是与font-size一致。 解决的方案： 给input的height设定一个较小的高度，然后用padding去填充，基本上可以解决所有浏览器的问题
```css
input {
  height: 16px;
  padding: 4px 0px;
  font-size: 12px;
  line-height: normal;
}
```

22. 新窗口执行代码
  ```html
  <a href="javascript:window.open().document.write('<!DOCTYPE html>
  <html>
  <head>
    <meta charset=\'utf-8\'>
    <title>123<\/title>
  <\/head>
  <body>
      123
      <script>
          alert(123);
      <\/script>
  <\/body>
  <\/html>');">新窗口</a>
  ```

23. 获取url中的参数
  ```javascript
  function getQueryStringRegExp(name, url){
    var url = url || location.href;
    var reg = new RegExp("[\?|&]"+ name +"=([^&]*)", "i");
    return reg.exec(url) && reg.exec(url)[1] || "";
  /*  if(reg.test(url)){
      return unescape(RegExp.$1.replace(/\+/g, " "));
    }
  */
  }
  alert(getQueryStringRegExp("hello","http://localhost:8080/test.html?hellsdfo=lkl&aa=bb&test=cc+dd&ee=ff&hello=iod士大夫上jdkl"));
  ```

24. 代替IE的hack
  ```html
  <!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
  <!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
  <!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
  <!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
  <!--[if (gt IE 9)|!(IE)]><!--> <html class=""> <!--<![endif]-->
  ```
25. 元素的z-index设置和不设置的情况是不同的, 同级的设置z-index如果a<b,那么a的子级元素即使z-index大于b也不会在b上面显示。
26. Chosen 输入框带选项，mobiscroll 手机滚动日期选择插件
27. 把文章中的英文的第一个字母大写 
  ```javascript
  /*
  replace有接受两个参数，第一个参数可以是字符串，也可以是正则表达式，第二个参数除支持字符串之外，
  还支持$1形式正则匹配的文本，除此之外还支持传入一个处理函数，这个函数的return值就是要替换成的内容。
  了解更多javascript的String.replace用法，访问：http://www.w3school.com.cn/js/jsref_replace.asp
    传给replace 函数参数的值是匹配正则的字符串片段
  */
  var str="sdfsd sdfsd 123456 peakfish ,你好 sdfd dfs, sdfsdf dfgdf. ";
  var r=/(\s|^)[a-z]/g;
  var newstr=str.replace(r,function(s){
    return s.toUpperCase();
  });
  alert(newstr);
  ```
 [相关资源](http://js8.in/2011/11/08/javascript%E7%9A%84string-replace%E7%9A%84%E5%A6%99%E7%94%A8/)
 css 属性 text-transform:capitalize;

28. javascript 变量传递形式1
  ```javascript
  function setName(obj){
    obj.name = "xiaobai";//1
    obj = new Object();  //2
    obj.name = "xiaohei";//3
  return obj;   //4
  }
  var dog = new Object();  
  var cat=setName(dog);//调用函数就会开辟一个新栈区，把dog(dog是个引用指向堆区的对象)的值复制一份传给函数
  console.log(dog.name);//函数执行到第2句的时候修改了传递过去的值,指向了一个新的对象所以外层的dog指向并没有被修改打印出"xiaobai"
  console.log(cat.name);//函数的返回值指向的对象是在函数中被新创建的所以打印出"xiaohei"
  ```

29. data url
  ```html
  data:,<文本数据>
  data:text/plain,<文本数据>
  data:text/html,<HTML代码>
  data:text/html;base64,<base64编码的HTML代码>
  data:text/css,<CSS代码>
  data:text/css;base64,<base64编码的CSS代码>
  data:text/javascript,<Javascript代码>
  data:text/javascript;base64,<base64编码的Javascript代码>
  data:image/gif;base64,base64编码的gif图片数据
  data:image/png;base64,base64编码的png图片数据
  data:image/jpeg;base64,base64编码的jpeg图片数据
  data:image/x-icon;base64,base64编码的icon图片数据
  ```

30. 一些有用的网址 
  [手机的分辨率](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density)
  [淘宝双飞翼(圣杯)布局 demo](http://lifesinger.googlecode.com/svn/trunk/lab/2008/grids_test1.html)
  [学习jQuery源码的bug了解网址](http://bugs.jquery.com/)
  [图片压缩的博客](http://handyxuefeng.blog.163.com/blog/static/45452172201391415246847/)

31. JQuery和原生js的区别一
  ```html
  <div id="div1">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
  <script type="text/javascript">
  var oDiv=document.getElementByIdx_x('div1');
  var oUl=oDiv.getElementsByTagName_r('ul')[0];
  var aLi=oUl.getElementsByTagName_r('li');//3
  alert(aLi.length);//4
  oUl.innerHTML+=oUl.innerHTML;
  alert(aLi.length);//6
  //第四句输出的是4
  //第六句输出的是8
  //如果第三句写成var aLi=$('li');
  //那么
  //第四句输出的是4
  //第六句输出的是4
  //理解： //原生的是在内存由浏览器管理的对象，这个对象是实时的，但是通过document.querySelectorAll()//选择的对象 不是实时的（权威指南第六版中有讲到）。而jquery 是维护的自己的类数组对象。
  </script>
  ```





