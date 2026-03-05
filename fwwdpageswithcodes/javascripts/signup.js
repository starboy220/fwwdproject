const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirm = document.getElementById('confirm').value;

      let isValid = true;

      if (fullname.length < 2) {
        const el = document.getElementById('fullnameError');
        el.textContent = 'Full name must be at least 2 characters';
        el.style.display = 'block';
        isValid = false;
      }

      if (!email.includes('@')) {
        const el = document.getElementById('emailError');
        el.textContent = 'Please enter a valid email';
        el.style.display = 'block';
        isValid = false;
      }

      if (password.length < 6) {
        const el = document.getElementById('passwordError');
        el.textContent = 'Password must be at least 6 characters';
        el.style.display = 'block';
        isValid = false;
      }

      if (password !== confirm) {
        const el = document.getElementById('confirmError');
        el.textContent = 'Passwords do not match';
        el.style.display = 'block';
        isValid = false;
      }

      if (isValid) {
        const success = document.getElementById('successMessage');
        success.style.display = 'block';
        form.reset();
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);
      }
    });