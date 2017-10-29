---
title: onmouseenter 和 onmouseleave事件 非 ie 浏览器 模拟函数
date: 2016-03-15 8:00:02
updated:
---

原来我以为非ie浏览器模拟这个事件 用的是 settimeout 延迟判断鼠标事件 （mouseover mouseout） 是否冒泡到父元素中的。

<!-- more -->

下面代码复制自 [司徒正美博客](http://www.cnblogs.com/rubylouvre/archive/2009/12/20/1627921.html) *自己加了下注释* 

```javascript
//用法
function addEvent(el, type, handler, capture) {
  if (typeof el.addEventListener != 'undefined') {
    if (type === 'mouseenter') {
      el.addEventListener('mouseover', withinElement(handler), capture);
    } else if (type === 'mouseleave') {
      el.addEventListener('mouseout', withinElement(handler), capture);
    } else {
      el.addEventListener(type, handler, capture);
    }
  } else if (typeof el.attachEvent != 'undefined') {
    el.attachEvent('on' + type, handler);
  } else {
    el['on' + type] = handler;
  }
}
/*relatedTarget 事件属性返回与事件的目标节点相关的节点。
对于 mouseover 事件来说，该属性是鼠标指针移到目标节点上时所离开的那个节点。
对于 mouseout 事件来说，该属性是离开目标时，鼠标指针进入的节点。
对于其他类型的事件来说，这个属性没有用。*/

//非ie 浏览器的  mouseenter mouseleave 事件处理函数
function withinElement(handler){
  return function (e) {
    //相关的元素
    var related=e.relatedTarget;
    //子元素的 onmouseover onmouseout 事件会冒泡到 父元素中，在父元素和子元素中 移动鼠标会触发 onmouseover onmouseout 事件， 但是不会触发 mouseenter mouseleave 。所以在不支持 mouseenter mouseleave 的浏览器中，判断 onmouseover 事件中移开的 那个元素是不是 绑定事件的子元素，或者 onmouseout 事件中移入的 那个元素是不是 绑定事件的子元素。如果是则不触发 mouseenter mouseleave 这两个事件。

    //循环比较 事件对象的 relatedTarget 的父元素是不是 绑定  mouseenter mouseleave 事件的元素 (related != this)，如果是 则鼠标在元素内部移动 不触发 mouseenter mouseleave 事件。
    while(related && related != this){
      try{
        related = related.parentNode;
      }catch(e){
        break;
      }
    }
    if(related != this)
      handler.call(this, e);
  };
}
```










