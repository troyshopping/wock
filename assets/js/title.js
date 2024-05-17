  function animateTitle(title, speed) {
    const originalTitle = document.title;
    let i = 0;
    const animationInterval = setInterval(function() {
      document.title = title.substring(0, i);
      i++;
      if (i > title.length) {
        clearInterval(animationInterval);
        document.title = originalTitle;
      }
    }, speed);
  }

  animateTitle("wock.lol", 100);