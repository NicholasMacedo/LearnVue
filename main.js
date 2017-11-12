// Vue Demo One: Updating a Div
var demoOne = new Vue({
  el: '#demo1',
  data: {
    message: 'Hello Vue!'
  }
})

// Vue Demo Two: Dynamic Title
var demoTwo = new Vue({
  el: '#demo2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

// Vue Demo Three: Conditonals & Seen
var demoThree = new Vue({
  el: '#demo3',
  data: {
    seen: true
  }
})

// Vue Demo Four: Display Iterating over an Array of Items
var demoFour = new Vue({
  el: '#demo4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

// Vue Demo Five: Do something on user actions.
var demoFive = new Vue({
  el: '#demo5',
  data: {
    message: 'This is a string!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// Vue Demo Six: Bind fields to display dynamically.
var demoSix = new Vue({
  el: '#demo6',
  data: {
    message: 'Testing!'
  }
})

// Vue Demo Six: Bind fields to display dynamically.
var demoSeven = new Vue({
  el: '#demo7',
  data: {
    rawHtml: '<p> This is inside an injected P tag</p>'
  }
})