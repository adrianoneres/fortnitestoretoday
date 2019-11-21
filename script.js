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

var updateTime = setInterval(function() {
  var date = new Date()
  
  var hour = 23 - date.getUTCHours();
  var minute = 59 - date.getUTCMinutes();
  var second = 60 - date.getUTCSeconds();

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var timeToUpdate = hour + ':' + minute + ':' + second;

  if (timeToUpdate === '00:00:00') {
    clearInterval(updateTime)
    setInterval(function() {
      location.reload()
    }, 5000)
  }

  document.querySelector('#timeToUpdate').innerHTML = timeToUpdate
}, 1000)
