var app = new Vue({
  el: '#dictionary',
  data: {
    // dictionary: [{
    //   key:'Term',
    //   def:['Definition paragraphs'],
    //   url:['Links']
    // }]
    dictionary: window.customDictionary
  },
  methods: {
    underscore: function (key){
      return key.toLowerCase().split(' ').join('_');
    }
  }
});
