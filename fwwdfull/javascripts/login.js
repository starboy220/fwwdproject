const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      let isValid = true;

      if (!email.includes('@')) {
        const el = document.getElementById('emailError');
        el.textContent = 'Please enter a valid email';
        el.style.display = 'block';
        isValid = false;
      }

      if (password.length < 1) {
        const el = document.getElementById('passwordError');
        el.textContent = 'Password cannot be empty';
        el.style.display = 'block';
        isValid = false;
      }

      if (isValid) {
        const success = document.getElementById('successMessage');
        success.style.display = 'block';
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      }
    });