// Tab & filter toggle
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
    document.querySelectorAll('.date-option').forEach(opt => {
      opt.addEventListener('click', function() {
        document.querySelectorAll('.date-option').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
      });
    });