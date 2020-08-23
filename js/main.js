// Typing animation

const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 100 * ++index);
    });
  }
  
  typing('#typing', "email = m4neda at gmail.com");