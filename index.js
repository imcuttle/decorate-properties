// Forked from mobxjs@5
const isPlainObject = require('lodash.isplainobject')

function decorate(thing, decorators) {
  if (process.env.NODE_ENV !== 'production' && !isPlainObject(decorators)) {
    throw new TypeError('decorate-properties: Decorators should be a key value map')
  }

  const target = typeof thing === 'function' ? thing.prototype : thing
  for (let prop in decorators) {
    let decorator = decorators[prop]
    if (!Array.isArray(decorator)) {
      decorator = [decorator]
    }

    if (process.env.NODE_ENV !== 'production' && !decorator.every(decorator => typeof decorator === 'function')) {
      console.error(`decorate-properties: expected a decorator function or array for of function for '${prop}'.`)
      return
    }

    const descriptor = Object.getOwnPropertyDescriptor(target, prop)
    const newDescriptor = decorator.reduce(
      (accDescriptor, decorator) => decorator(target, prop, accDescriptor),
      descriptor
    )

    if (newDescriptor) {
      Object.defineProperty(target, prop, newDescriptor)
    }
  }
  return thing
}

module.exports = decorate
