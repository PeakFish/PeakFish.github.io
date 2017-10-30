title: javascript 文件上传
date: 2016-04-05 09:35:03
updated:
---
<!-- more -->

###### 对于 javascript 文件上传老是搞得不清不楚的，所以决定了解一下，记录在这。先来简单了解下 javascript 中和文件相关对象

- ArrayBuffer 缓冲数组，不能直接操作，需要依靠 DataView 。
- DataView 提供了一种用于向 ArrayBuffer 读写数据的底层接口。

```javascript
var littleEndian = (function(){
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

- TypedArray 类型数组，在 WebGL 中使用较多，类型有九种 `Int8Array`、 `Uint8Array`、 `Uint8ClampedArray`、 `Int16Array`、 `Uint16Array`、 `Int32Array`、 `Uint32Array`、 `Float32Array`、 `Float64Array` 。
- Blob 二进制大对象，除了 Blob 构造函数创建，还可以调用 canvas 上的 toBlob 方法。
- File 文件对象，继承于 Blob 。
- FormData html form 表单数据的 javascript 版本！！！

以上就是和文件相关的对象，下面来了解一下获取用户文件的几种方式。

## 获取文件
- input 方式
`<input type="file" />` IE直到10才支持input上的`files`属性，选择的文件信息存储在上面，是一个数组中的元素是选择的文件。
有时候需要把 input 隐藏，用自定义的元素来代替，但是点击事件还是要发生在 input 上的，这里说一句在有些设备上`display:none;`的 input 不能弹出选择文件的窗口，用`width:0;height:0;`代替。国内的好多安卓机点击input上传文件的对话框都弹不出来。还有新规范打算支持上传[文件夹](https://wicg.github.io/directory-upload/proposal.html)。

```html
<input type="file" accept="video/*" /><!--accept 期望的文件类型-->
<input type="file" accept="image/*" multiple /><!--multiple 布尔值 是否可以选择多个文件-->
<input type="file" capture="camera" /><!--相机拍照-->
```

- 拖拽方式
拖拽也可以上传文件，拖拽涉及到的事件分类有两种， 一种发生在*被拖动元素*上，（dragstart、drag、dragend） 。一种发生在**接收*被拖动元素*的元素**上， （dragenter、dragover、dragleave、drop） 。
上传文件，*被拖动的元素*应该是用户操作系统中的文件，所以在网页上给**接收*被拖动的元素*的元素**上绑定相应的事件（dragenter、dragover、dragleave、drop） 。
`dragenter`拖动移入元素时触发，`dragleave`拖动离开元素时触发，`dragover`类似`mousemove`在元素上移动时多次触发,`drop`拖拽结束触发。如果拖动包含文件那么在拖动结束后 e.dataTransfer.files 对象就是存储文件的数组。

```javascript
var dropEle = document.querySelector('接受文件拖放的元素');
dropEle.addEventListener("dragenter", function(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  this.classList.add('hover');
  return false;
}, false);

dropEle.addEventListener("dragleave", function(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  this.classList.remove('hover');
  return false;
}, false);

dropEle.addEventListener("dragover", function(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  this.classList.add('hover');
  return false;
}, false);

dropEle.addEventListener("drop", function(e){
  e.preventDefault();
  this.classList.remove('hover');
  //文件处理
  handleFiles(e.dataTransfer.files);
  return false;
}, false);

function handleFiles(files){
  //文件处理
}
```

得到了文件，在上传之前，希望用户选择完文件以后可以在网页中预览下选择的文件，下面先介绍下文件预览，然后再介绍文件上传。

## 文件预览
文件的展现方式就和文件的格式相关了。就只介绍下图片的吧。别的不懂。
### 图片预览
要展示图片我们需要一个 url，把文件对象转成 url 的方法有我知道有两种。
- URL
`URL.createObjectURL`方法可以传入 Blob 对象或者 File 对象。`URL.revokeObjectURL`用于销毁，释放内存。

```javascript
window.URL = window.URL || window.webkitURL;
var img = document.querySelector('#URLPreview');
img.src = URL.createObjectURL(oFiles[0]);
img.onload = function(){
  URL.revokeObjectURL(this.src);
};
```

- FileReader
可以读取的 Blob 对象或者 File 对象。

```javascript
//创建 FileReader
var oFReader = new FileReader(),
  //过滤图片文件的正则
  rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
oFReader.onload = function(oFREvent){
  document.getElementById("FileReaderPreview").src = oFREvent.target.result;
};
function loadImageFile(){
  if(document.getElementById("uploadImage").files.length === 0){
    return;
  }
  var oFile = document.getElementById("uploadImage").files[0];
  //过滤文件
  if(!rFilter.test(oFile.type)){
    alert("You must select a valid image file!");
    return;
  }
  //读取文件
  oFReader.readAsDataURL(oFile);
}
```

除了`readAsDataURL()`，还有`readAsText()`可以读取文本内容。

介绍完预览的方法了下面来说说上传文件的集中方式。

## 文件上传
- form
使用 form 上传文件需要 添加`enctype="multipart/form-data"`属性。 form 表单上传方式页面需要刷新。

```html
<form action="/up" method="POST" enctype="multipart/form-data">
  <input name="testimage" type="file" />
  <input type="submit" value="提交" />
</form>
```

- iframe
iframe 上传方式是比较老的解决 form 上传文件页面刷新的问题的。iframe 上传的原理是在页面中新建一个iframe标签。然后form的target属性指定成iframe的name属性，页面刷新就发生在iframe中了。

```html
<iframe name="iframeFileUpload" src="" frameborder="0"></iframe>
<form action="/up" method="POST" enctype="multipart/form-data" target="iframeFileUpload">
  <input name="testimage" type="file" />
  <input type="submit" value="提交" />
</form>
```

如果接收返回值的话可以在 url 上面约定函数名然后由服务器返回 js 调用 `window.parent['callbackname'](data)`。
- ajax
ajax 上传方式依赖 FormData 对象。

```javascript
var fd = new FormData();//穿件 FormData ，也可以传入一个 html form 表单元素。
fd.append('testimage', FormDataUploadFile.files[0]);//添加一个元素， name=value 的形式。
$.ajax({
  url: '/up',
  type: 'POST',
  data: fd,
  processData: false,//告诉jQuery不要去处理发送的数据
  contentType: false,//告诉jQuery不要去设置Content-Type请求头
  success: function(r){
    console.log(r);
  },
  error: function(r){
    console.log(r);
  }
});
```

网页中上传的文件可能大部分是图片，对图片的压缩、旋转、剪裁的需求也比较多，在各种浏览器上面的坑也是很多，参考链接列出了一些库。还有就是最好别用 base64 字符串上传，因为它比实际的文件大。

##### 最后提供一个测试时候使用的后端保存文件的代码，使用的是 express + multer，返回一个成功的url给前端，比较粗糙。

```javascript
// 上传的 input file 的 name 属性的 值是 testimage
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './public/uploads/');//上传文件存放的目录
  },
  filename: function(req, file, cb){
    var fileFormat = file.originalname.split(".");
    cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);//上传文件的文件名
  }
});
var upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'testimage', maxCount: 1 }, { name: 'otherimage', maxCount: 8 }]);
app.post('/up', cpUpload, function(req, res, next){
  console.log(req.files);
  res.send(req.files['testimage'][0].path);
});
```

如果有什么错误欢迎指出。

##### 参考链接
[Mozilla Developer Network](https://developer.mozilla.org)
[百度的webuploader](https://github.com/fex-team/webuploader)
[localResizeIMG](https://github.com/think2011/localResizeIMG)
[javascript-jpeg-encoder](https://github.com/owencm/javascript-jpeg-encoder)
[ios-imagefile-megapixel](https://github.com/stomita/ios-imagefile-megapixel)
[exif-js](https://github.com/exif-js/exif-js)
[LocalFileSystem](https://developer.mozilla.org/en-US/docs/Web/API/LocalFileSystem)
