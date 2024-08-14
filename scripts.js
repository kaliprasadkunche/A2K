document.addEventListener('DOMContentLoaded', () => {
  // GSAP animations
  gsap.from('.hero h1', { duration: 1.5, y: 50, opacity: 0 });
  gsap.from('.cta-button', { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });

  // Mobile navigation toggle
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav ul li a');

  nav.addEventListener('click', () => {
      nav.classList.toggle('open');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('open');
      });
  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const formMessage = document.querySelector(".form-message");

// Function to handle form submission
const handleFormSubmit = function (event) {
event.preventDefault(); // Prevent default form submission

// Use EmailJS to send the email
emailjs.sendForm('service_hktt3fh', 'template_hzf8xzk', form)
  .then(function(response) {
    console.log('Email sent successfully', response);
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    formMessage.style.display = 'block'; // Show message
    form.reset(); // Reset the form
    formBtn.setAttribute("disabled", ""); // Disable button after submission
  }, function(error) {
    console.error('Error sending email:', error);
    formMessage.textContent = 'There was an error sending your message. Please try again later.';
    formMessage.style.color = 'red';
    formMessage.style.display = 'block'; // Show message
  });
};

// Add event listener to the form submit button
if (formBtn) {
formBtn.addEventListener("click", handleFormSubmit);
}

// Add event to all form input field
if (formInputs.length > 0) {
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
};
