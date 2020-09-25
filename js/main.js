// Typing animation

const typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 100 * ++index);
    });
  }
  
  typing('#typing_animation', "email=m4neda*gmail.com");