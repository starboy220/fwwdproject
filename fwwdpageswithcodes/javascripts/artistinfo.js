// Follow button toggle
    const followBtn = document.getElementById('followBtn');
    followBtn.addEventListener('click', function() {
      if (this.classList.contains('btn-primary')) {
        this.textContent = 'Following';
        this.classList.remove('btn-primary');
        this.classList.add('btn-outline');
      } else {
        this.textContent = 'Follow';
        this.classList.remove('btn-outline');
        this.classList.add('btn-primary');
      }
    });

    // Like buttons for artworks
    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
          icon.classList.replace('far', 'fas');
          this.classList.add('liked');
          // Increment like count
          let count = parseInt(this.textContent.match(/\d+/)[0]);
          this.innerHTML = `<i class="fas fa-heart"></i> ${count + 1}`;
        } else {
          icon.classList.replace('fas', 'far');
          this.classList.remove('liked');
          let count = parseInt(this.textContent.match(/\d+/)[0]);
          this.innerHTML = `<i class="far fa-heart"></i> ${count - 1}`;
        }
      });
    });
