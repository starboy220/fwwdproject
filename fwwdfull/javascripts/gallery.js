// ---------- FILTER BUTTONS ----------
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // ---------- LIKE BUTTONS ----------
    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
          icon.classList.replace('far', 'fas');
          this.style.background = '#3F51B5';
          this.style.color = 'white';
        } else {
          icon.classList.replace('fas', 'far');
          this.style.background = 'transparent';
          this.style.color = '#3F51B5';
        }
      });
    });

    // ---------- PAGINATION ----------
    document.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (!this.classList.contains('active') && this.children.length === 0) {
          document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });