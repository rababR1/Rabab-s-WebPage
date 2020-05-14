window.addEventListener('scroll', function() {
    console.log("Scrollin'");
  });
  var scroll = window.requestAnimationFrame ||
  function(callback){ window.setTimeout(callback, 1000/60)};