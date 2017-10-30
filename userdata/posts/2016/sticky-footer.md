title: 几种使元素固定在页面底部的布局方案
date: 2016-06-16 15:28:42
updated:
---
<!-- more -->

怎样使一个元素一直出现在页面的最底部？切图仔应该都会遇到过这个问题。当页面足够长的时候一切都好，当页面的长度小于一屏的高度的时候页脚就跟着上来了，怎么让它一直在最下面呢？收集了网上的集中方法。

1. 页脚高度固定，margin负值的方法，兼容性比较好。

```html
<style type="text/css">
* {margin: 0;padding: 0;}
html, body {height: 100%;}
.wrap {min-height: 100%;}
/*margin的负值放在footer上*/
.main {padding-bottom: 150px;}
.footer {margin-top: -150px;height: 150px;background: #ccc;}
/*margin的负值放在main上*/
.main {padding-bottom: 150px;margin-bottom: -150px;}
.footer {height: 150px;background: #ccc;}
</style>

<div class="wrap">
  <div class="main">
    123465<br/><br/><br/><br/><br/><br/><br/>123465798
  </div>
</div>

<div class="footer">
  123465
</div>
```

2. 绝对定位方式


```html
<style type="text/css">
html {
  position: relative;
  min-height: 100%;
}
body {
  margin: 0 0 100px;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: #ccc;
}
</style>

<p>123465<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>123465798</p>
<footer>123456</footer>
```

3. 神奇的`display: table;`


```html
<style type="text/css">
html, body {
  height: 100%;
  margin: 0;
}
body {
  display: table;
  width: 100%;
}
.Row {
  display: table-row;
  height: 1px;
}
.Row.Expand {
  height: auto;
}
</style>

<header class="Row"><h1>Catchy header</h1></header>
<section class="Row Expand"><h2>Awesome content</h2></section>
<footer class="Row"><h3>Sticky footer</h3></footer>
```

4. 牛逼的css计算器

```html
<style type="text/css">
* {margin: 0;padding: 0;}
.wrap {min-height: calc(100vh - 7em);}
footer {height: 7em;background: #ccc;}
</style>

<div class="wrap">123465<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>123465798</div>
<footer>123456</footer>
```

5. 为移动而生的`display: flex;`

```html
<style type="text/css">
* {margin: 0;padding: 0;}
body {display: flex;flex-flow: column;min-height: 100vh;}
.main {flex: 1;}
</style>

<div class="main"></div>
<footer>123<br/>456</footer>
```

要是你有其他的方法欢迎分享下

##### 参考链接
[紧贴底部的页脚](https://github.com/cssmagic/CSS-Secrets/issues/18)
[cssstickyfooter.com](http://cssstickyfooter.com)
[ryanfait.com/sticky-footer](http://ryanfait.com/sticky-footer)
[css-tricks.com/snippets/css/sticky-footer](http://css-tricks.com/snippets/css/sticky-footer)
[pixelsvsbytes.com/blog/2011/09/sticky-css-footers-the-flexible-way](http://pixelsvsbytes.com/blog/2011/09/sticky-css-footers-the-flexible-way)
[mystrd.at/modern-clean-css-sticky-footer](http://mystrd.at/modern-clean-css-sticky-footer)
