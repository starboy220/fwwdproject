const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });