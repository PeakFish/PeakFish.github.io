---
title: js 复制
date: 2017-09-29 15:08:55
updated:
---


```js
	window.clipboardData.setData("text", '123asdfadsf');
	var name = $('#UserName').val();
	var url = $('#share_url').val();
	var input = $('<input style="position:absolute;left:-10000px;top:-10000px;" type="text" value="'+name+url+'" />').appendTo('body');
	$('#copy_id').on('click', function(){
	    input.select();
	    document.execCommand('copy', true);
	});
```

####参考链接
https://github.com/zeroclipboard/zeroclipboard

https://github.com/zenorocha/clipboard.js

http://www.cnblogs.com/cherrychen/p/3861381.html

http://www.cnblogs.com/tylerdonet/p/4533782.html

http://www.cnblogs.com/PeunZhang/p/3324727.html

