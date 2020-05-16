function roundedIt(options) {
  let images = document.querySelectorAll('.rounded-it');

  switch (options.type) {
    case 'hardest':
      options.value = '1000px'
      break;

    case 'hard':
      options.value = '100px'
      break;

    default:
      options.value = '10px'
      break;
  }

  images.forEach((image) => {
    image.style.borderRadius = options.value;
  });
}

module.exports.roundedIt = roundedIt;
