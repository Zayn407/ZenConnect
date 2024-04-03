document.getElementById('post-status').addEventListener('click', function() {
    var statusText = document.getElementById('status-input').value.trim();
    if (statusText) {
      // Create elements for the new post
      var post = document.createElement('div');
      post.classList.add('post'); // Apply the 'post' class for styling
      
      var postAuthor = document.createElement('h3');
      postAuthor.textContent = 'You'; // Replace with the actual username if available
  
      var postContent = document.createElement('p');
      postContent.textContent = statusText;
  
      // Append the author and content to the post div
      post.appendChild(postAuthor);
      post.appendChild(postContent);
  
      // Append new post to the top of the social feed
      var socialFeed = document.querySelector('.social-feed');
      socialFeed.insertBefore(post, socialFeed.firstChild); // Adds the new post at the top of the feed
  
      // Clear the status input after posting
      document.getElementById('status-input').value = '';
    } else {
      alert('Please enter a status to post.');
    }
  });
  