function linkInputs() {
  console.log('linked')
  setTimeout(() => {
    let buttonsArr = document.getElementsByTagName('li')
    console.log(buttonsArr)
  }, 3000)
}

linkInputs();
