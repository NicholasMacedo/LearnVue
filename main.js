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