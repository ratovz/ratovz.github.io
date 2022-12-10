
function scrollToGallery() {
    // Find the element with the ID "gallery"
    var gallery = document.getElementById('galerija');
  
    // Check if the element exists
    if (gallery) {
      // Scroll to the element
      gallery.scrollIntoView({
        behavior: "smooth"

      });
    }
  }

