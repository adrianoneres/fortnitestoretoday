axios.get('https://fortnite-api.theapinetwork.com/store/get').then(function(response) {
  var divItems = document.querySelector('#items')
  var items = response.data.data

  items.forEach(item => {
    var img = document.createElement('img')
    img.setAttribute('src', item.item.images.information)
    img.setAttribute('alt', item.item.name)

    divItems.appendChild(img)
  })
})

function updateTime() {
  var date = new Date()
  
  var hour = 23 - date.getUTCHours();
  var minute = 60 - date.getUTCMinutes();
  var second = 60 - date.getUTCSeconds();

  var timeToUpdate = hour + ':' + minute + ':' + second;

  document.querySelector('#timeToUpdate').innerHTML = timeToUpdate
}

setInterval(function() {
  updateTime()
}, 1000)