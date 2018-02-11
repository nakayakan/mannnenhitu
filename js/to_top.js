var moveTime = 1

$(function() {
  var moveId = setTimeout(function() {
    window.location = '../index.html'
  }, moveTime * 60 * 1000)
  $(document).mousemove(function() {
    clearTimeout(moveId)
    moveId = setTimeout(function() {
      window.location = '../index.html'
    }, moveTime * 60 * 1000)
  })
})