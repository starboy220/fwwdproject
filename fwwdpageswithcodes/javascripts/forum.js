document.addEventListener('DOMContentLoaded', function() {
  const postForm = document.getElementById('postForm');
  const cancelBtn = document.getElementById('cancelPost');
  const discussionsList = document.querySelector('.discussions-list');
  const totalDiscussionsEl = document.querySelector('.stat-card .number'); // first stat card (total discussions)
  
  function getTimeAgo() {
    return 'just now'; 
  }
  postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('postTitle').value.trim();
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value.trim();
    if (!title || !category || !content) {
      alert('Please fill in all fields.');
      return;
    }
    const newDiscussion = document.createElement('div');
    newDiscussion.className = 'discussion-item';
    const avatars = ['ST', 'SR', 'STM', 'UT'];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    newDiscussion.innerHTML = `
      <div class="discussion-avatar">${randomAvatar}</div>
      <div class="discussion-info">
        <h4><a href="#">${escapeHTML(title)}</a></h4>
        <div class="discussion-meta">
          Started by <a href="#">You</a> • ${getTimeAgo()} • 0 replies
        </div>
      </div>
    `;
    const firstDiscussion = discussionsList.querySelector('.discussion-item');
    if (firstDiscussion) {
      discussionsList.insertBefore(newDiscussion, firstDiscussion);
    } else {
      discussionsList.appendChild(newDiscussion);
    }
    let currentTotal = parseInt(totalDiscussionsEl.textContent, 10);
    if (!isNaN(currentTotal)) {
      totalDiscussionsEl.textContent = currentTotal + 1;
    }
    postForm.reset();
    alert('Your discussion has been posted!');
  });
  cancelBtn.addEventListener('click', function() {
    postForm.reset();
  });
  function escapeHTML(str) {
    return str.replace(/[&<>"]/g, function(match) {
      if (match === '&') return '&amp;';
      if (match === '<') return '&lt;';
      if (match === '>') return '&gt;';
      if (match === '"') return '&quot;';
      return match;
    });
  }
});