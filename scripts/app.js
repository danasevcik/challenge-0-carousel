function rotateImages() {

  let image = document.querySelector('.image')
  let counter = 0

  setInterval(() => {
      image.style.backgroundImage = `url(./images/hero-image-${counter}.jpg)`
      counter ++
      if (counter >= 4) {
        counter = 0
      }
    }, 1000)
}


rotateImages()
