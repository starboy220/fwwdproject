// Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      contactForm.reset();
    });

    // Character counter for message
    const messageField = document.getElementById('message');
    const counter = document.createElement('div');
    counter.style.textAlign = 'right';
    counter.style.fontSize = '0.8rem';
    counter.style.color = '#666';
    counter.style.marginTop = '0.3rem';
    messageField.parentNode.appendChild(counter);

    messageField.addEventListener('input', function() {
      const remaining = 1000 - this.value.length;
      counter.textContent = `${remaining} characters remaining`;
    });
    messageField.dispatchEvent(new Event('input'));