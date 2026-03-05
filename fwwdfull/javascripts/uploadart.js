    const fileInput = document.getElementById('image');
    const fileNameDisplay = document.getElementById('fileName');

    fileInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        fileNameDisplay.textContent = 'Selected: ' + this.files[0].name;
      } else {
        fileNameDisplay.textContent = '';
      }
    });

    // Form validation and submission
    const form = document.getElementById('submitArtForm');
    const cancelBtn = document.getElementById('cancelBtn');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

      // Get values
      const title = document.getElementById('title').value.trim();
      const artist = document.getElementById('artistName').value.trim();
      const description = document.getElementById('description').value.trim();
      const category = document.getElementById('category').value;
      const price = document.getElementById('price').value.trim();
      const file = fileInput.files[0];

      let isValid = true;

      if (!title) {
        document.getElementById('titleError').textContent = 'Title is required.';
        document.getElementById('titleError').style.display = 'block';
        isValid = false;
      }

      if (!artist) {
        document.getElementById('artistError').textContent = 'Artist name is required.';
        document.getElementById('artistError').style.display = 'block';
        isValid = false;
      }

      if (!description) {
        document.getElementById('descError').textContent = 'Description is required.';
        document.getElementById('descError').style.display = 'block';
        isValid = false;
      }

      if (!category) {
        document.getElementById('categoryError').textContent = 'Please select a category.';
        document.getElementById('categoryError').style.display = 'block';
        isValid = false;
      }

      if (!price || isNaN(price) || Number(price) <= 0) {
        document.getElementById('priceError').textContent = 'Please enter a valid positive price.';
        document.getElementById('priceError').style.display = 'block';
        isValid = false;
      }

      if (!file) {
        document.getElementById('fileError').textContent = 'Please upload an image.';
        document.getElementById('fileError').style.display = 'block';
        isValid = false;
      }

      if (isValid) {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        // Optionally reset form after a delay
        setTimeout(() => {
          form.reset();
          fileNameDisplay.textContent = '';
          document.getElementById('successMessage').style.display = 'none';
        }, 3000);
      }
    });

    cancelBtn.addEventListener('click', function() {
      form.reset();
      fileNameDisplay.textContent = '';
      document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
    });