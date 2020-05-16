function roundedIt(options) {
  let images = document.querySelectAll('.rounded-it');

  if (options.type === 'hard') {
    options.value = '100px'
  } else {
    options.value = '10px'
  }

  images.forEach((image) => {
    image.style.borderRadious = options.value;
  });
}

module.exports.roundedIt = roundedIt;
