title: js getter 和 setter
date: 2017-10-04 23:25:00
updated:
---
<!-- more -->

# ES5
## 对象上的 getter 和 setter

```js
var person = {
  firstName: 'Jimmy',
  lastName: 'Smith',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName (name) {
    var words = name.toString().split(' ');
    this.firstName = words[0] || '';
    this.lastName = words[1] || '';
  }
};

person.fullName = 'Jack Franklin';
console.log(person.firstName); // Jack
console.log(person.lastName); // Franklin
```



## Object.defineProperty

```js
var person = {
    firstName: 'Jimmy',
    lastName: 'Smith'
};

Object.defineProperty(person, 'fullName', {
    get: function() {
      return firstName + ' ' + lastName;
    },
    set: function(name) {
      var words = name.split(' ');
      this.firstName = words[0] || '';
      this.lastName = words[1] || '';
    }
});
```


# ES2015
## Proxy

```js
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
```



