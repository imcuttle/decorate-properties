/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const decorateProperties = require('../')

describe('main', function() {
  it(
    'should decorateProperties passed',
    function () {
      function testDecorator(target, name, descriptor) {
        console.log(target, name, descriptor)
      }
      class Person {
        name = 'imcuttle'
      }
      decorateProperties(new Person(), {
        name: testDecorator
      })
    }
  )
})
