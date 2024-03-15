// Add focus class to input container on input focus
document.getElementById('animatedInput').addEventListener('focus', function() {
    this.parentNode.classList.add('focus');
  });
  
  // Remove focus class from input container on input blur
  document.getElementById('animatedInput').addEventListener('blur', function() {
    if (this.value === '') {
      this.parentNode.classList.remove('focus');
    }
  });
  