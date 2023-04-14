// get all section elements
const sections = document.querySelectorAll('section');

// get the height of the viewport
const windowHeight = window.innerHeight;

// set the current section to the first section
let currentSection = 0;

// listen for scroll events
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // check if we've scrolled past the current section
  if (scrollPosition > sections[currentSection].offsetTop + sections[currentSection].offsetHeight - windowHeight) {
    // move to the next section
    currentSection++;

    // check if we've reached the end of the page
    if (currentSection >= sections.length) {
      return;
    }

    // scroll to the next section
    window.scrollTo({
      top: sections[currentSection].offsetTop,
      behavior: 'smooth'
    });
  } else if (scrollPosition < sections[currentSection].offsetTop) {
    // move to the previous section
    currentSection--;

    // check if we're at the top of the page
    if (currentSection < 0) {
      currentSection = 0;
    }

    // scroll to the previous section
    window.scrollTo({
      top: sections[currentSection].offsetTop,
      behavior: 'smooth'
    });
  }
});
