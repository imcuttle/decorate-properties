# decorate-properties

[![build status](https://img.shields.io/travis/imcuttle/decorate-properties/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/decorate-properties)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/decorate-properties.svg?style=flat-square)](https://codecov.io/github/imcuttle/decorate-properties?branch=master)
[![NPM version](https://img.shields.io/npm/v/decorate-properties.svg?style=flat-square)](https://www.npmjs.com/package/decorate-properties)
[![NPM Downloads](https://img.shields.io/npm/dm/decorate-properties.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/decorate-properties)

The repo is forked from the [`decorate`](https://mobx.js.org/refguide/modifiers.html) API of mobxjs@5.

### Usage

```javascript
import * as decorate from 'decorate-properties' 
import { observable, computed, action } from 'mobx'
 
class Person {
    name = "John"
    age = 42
    showAge = false

    get labelText() {
        return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
    }

    setAge(age) {
        this.age = age;
    }
}
// when using decorate, all fields should be specified (a class might have many more non-observable internal fields after all)
decorate(Person, {
    name: observable,
    age: observable,
    showAge: observable,
    labelText: computed,
    setAge: action,
    // array of decorator function
    foo: [computed, observable]
})

// or
decorate(new Person(), {
    name: observable,
    age: observable,
    showAge: observable,
    labelText: computed,
    setAge: action
})
```
