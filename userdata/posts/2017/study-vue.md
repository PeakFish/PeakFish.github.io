


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




�ļ��ϴ�
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
  <button v-on:click="reverseMessage">��ת��Ϣ</button>
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





#���

Vue.component('todo-item', {
  // todo-item ������ڽ���һ��
  // "prop"��������һ���Զ�������
  // ���������Ϊ todo��
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


<div id="app-7">
  <ol>
    <!--
      ��������Ϊÿ�� todo-item �ṩ todo ����
      todo �����Ǳ������������ݿ����Ƕ�̬�ġ�
      ����Ҳ��ҪΪÿ������ṩһ����key������Щʱ�����ǻ��������͡�
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
      { id: 0, text: '�߲�' },
      { id: 1, text: '����' },
      { id: 2, text: '�������ʲô�˳ԵĶ���' }
    ]
  }
})



������������� ����ı�ֵ ����� ��Ⱦ����� ��ѭ��











ˢ�¼��� loading ״̬
user ͼƬ
����� ����״̬


https://github.com/mzabriskie/axios/issues/943



watch $store ���������
https://codepen.io/CodinCat/pen/PpNvYr
https://stackoverflow.com/questions/43270159/vuejs-2-how-to-watch-store-values-from-vuex




·�������� vue �첽��� https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
http://www.cnblogs.com/ihardcoder/p/5993410.html





webpack


vue

vuex

vue-loader

vue-router




























