new Vue ({
    el: '#app',
    data: {
    message: ''
},
methods: {
 reverseMessage: function() {
    this.message = this.message.split('').reverse().join('')
   }
  }         
})