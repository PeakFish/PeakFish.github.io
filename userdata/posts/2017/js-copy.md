title: js 复制
date: 2017-09-29 15:08:55
updated:
---
<!-- more -->

# IE 专有的
```js
window.clipboardData.setData("text", '123asdfadsf');
```

# chrome FF IE （IE有个访问剪贴板的提示）
```js
  var name = $('#UserName').val();
  var url = $('#share_url').val();
  var input = $('<input style="position:absolute;left:-10000px;top:-10000px;" type="text" value="'+name+url+'" />').appendTo('body');
  $('#copy_id').on('click', function(){
    input.select();
    document.execCommand("Copy");
    // document.execCommand('copy', true);// 这种写法在火狐下面没有复制成功
  });
```

#### 参考链接
https://github.com/zeroclipboard/zeroclipboard
https://github.com/zenorocha/clipboard.js
https://www.cnblogs.com/cherrychen/p/3861381.html
https://www.cnblogs.com/tylerdonet/p/4533782.html
https://www.cnblogs.com/PeunZhang/p/3324727.html
