const themes = ['cupcake', 'corporate', 'emerald']
const rt = Math.floor(Math.random() * themes.length)
document.documentElement.setAttribute('data-theme', themes[rt])

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    response: {},
    statusExample: 'eyJzdGF0ZSI6IkBhY3Rpdml0eSIsInNjcmVlbiI6NCwic3RlcCI6MCwiYW5zd2VycyI6eyIzLTEtMSI6W2ZhbHNlLHRydWUsZmFsc2UsZmFsc2VdLCIzLTItMiI6W2ZhbHNlLGZhbHNlLGZhbHNlLHRydWVdLCIzLTMtMSI6W3RydWUsZmFsc2UsZmFsc2UsZmFsc2VdLCIzLTQtMiI6W2ZhbHNlLHRydWUsZmFsc2UsZmFsc2VdLCIzLTUtMSI6W2ZhbHNlLGZhbHNlLHRydWUsZmFsc2VdLCIxLTEtMiI6W1siMCIsInZkIl1dLCIxLTItMiI6W1siMCIsInZpIl1dLCIxLTMtMiI6W1siMCIsInZkIl1dLCIxLTQtMiI6W1siMCIsInZpIl1dLCIxLTUtMiI6W1siMCIsInZpIl1dLCIyLTEtMSI6W1siMCIsIm5vIl1dLCIyLTEtMyI6W1siMCIsInNpIl1dLCIyLTEtNSI6W1siMCIsInNpIl1dLCIyLTEtNyI6W1siMCIsIm5vIl1dLCIyLTEtOSI6W1siMCIsIm5vIl1dfSwicmVzdWx0Ijp7IjEtMS0yIjp0cnVlLCIxLTItMiI6dHJ1ZSwiMS0zLTIiOnRydWUsIjEtNC0yIjp0cnVlLCIxLTUtMiI6dHJ1ZSwiMi0xLTEiOnRydWUsIjItMS0zIjp0cnVlLCIyLTEtNSI6dHJ1ZSwiMi0xLTciOnRydWUsIjItMS05Ijp0cnVlLCIzLTEtMSI6dHJ1ZSwiMy0yLTIiOnRydWUsIjMtMy0xIjp0cnVlLCIzLTQtMiI6dHJ1ZSwiMy01LTEiOnRydWV9LCJmaW5hbGl6ZSI6dHJ1ZX0='
  },
  mounted(){
    console.log('MOUNTED')
    var _this = this
    window.addEventListener('message', function (event) {
      var dataSt = event.data
      if(typeof dataSt == 'string'){
          var dataJSON = JSON.parse(dataSt)
          _this.response = dataJSON
          //_this.$set('_this', response, dataJSON)

      }
    }, true)
    
  } 
})

