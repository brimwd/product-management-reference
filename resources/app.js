var app = new Vue({
  el: '#dictionary',
  data: {
    // dictionary: [{
    //   key:'Term',
    //   def:['Definition paragraphs'],
    //   url:['Links'],
    //   alt:['Synonymous terms'],
    //   acronyms:['Acronyms']
    // }]
    dictionary: window.customDictionary
  },
  methods: {
    underscore: function (key){
      return key.toLowerCase().split(' ').join('_');
    }
  }
});
