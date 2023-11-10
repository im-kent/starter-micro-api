const axios = require('axios');

// Delay function to avoid rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to get the subreddits a user has posted or commented in
const getUserActivitySubreddits = async (username) => {
    try {
      const postsUrl = `https://www.reddit.com/user/${username}/submitted/.json?limit=100`; // Adjust limit as needed
      const commentsUrl = `https://www.reddit.com/user/${username}/comments/.json?limit=10`; // Adjust limit as needed
  
      // Wait before making the post request
      await delay(3000);
      const postsResponse = await axios.get(postsUrl);
  
      // Wait before making the comments request
    //   await delay(3000);
    //   const commentsResponse = await axios.get(commentsUrl);
  
      const subreddits = new Set(); // Use a set to ensure uniqueness
  
      // Add subreddits from posts
      postsResponse.data.data.children.forEach((post) => {
        subreddits.add(post.data.subreddit);
      });
  
      // Add subreddits from comments
    //   commentsResponse.data.data.children.forEach((comment) => {
    //     subreddits.add(comment.data.subreddit);
    //   });
  
      // Convert the set to an array
      return Array.from(subreddits);
    } catch (error) {
      console.error(`Error fetching activity for user ${username}:`, error);
      return [];
    }
  };

module.exports = {
    getUserActivitySubreddits
}
