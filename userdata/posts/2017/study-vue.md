
title: 学习 vue
date: 2017-09-04 23:25:00
updated:
---



\c-i-site\pages\home\components\main\Activities.vue
\c-i-site\pages\home\components\main\ChannelNavigater.vue







https://github.com/ElemeFE/vue-swipe
https://www.zhihu.com/question/41420420

https://github.com/hilongjw/vue-slide

http://www.cnblogs.com/JimmyBright/p/6506397.html


https://github.com/weilao/vue-swiper
https://github.com/surmon-china/vue-awesome-swiper
https://github.com/surmon-china/vue-awesome-swiper


http://www.cnblogs.com/zhouyangla/p/7081077.html




文件上传
https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2


https://vue-loader.vuejs.org/zh-cn/start/spec.html


#1

<div id="app">
  {{ message }}
</div>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


#2

<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})






#3
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
</div>

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})





#组件

Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义属性
  // 这个属性名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


<div id="app-7">
  <ol>
    <!--
      现在我们为每个 todo-item 提供 todo 对象
      todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个“key”，晚些时候我们会做个解释。
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
})



在组件生命周期 里面改变值 会继续 渲染组件吗 死循环











刷新简历 loading 状态
user 图片
下午好 几个状态


https://github.com/mzabriskie/axios/issues/943



watch $store 上面的属性
https://codepen.io/CodinCat/pen/PpNvYr
https://stackoverflow.com/questions/43270159/vuejs-2-how-to-watch-store-values-from-vuex




路由懒加载 vue 异步组件 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
http://www.cnblogs.com/ihardcoder/p/5993410.html





webpack


vue

vuex

vue-loader

vue-router




























