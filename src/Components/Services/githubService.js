import axios from 'axios';

const GITHUB_USERNAME = 'asanurag';

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`
    );
    return response.data.filter(repo => [
      'whisper', 
      'Task-Manager', 
      'student_scoreboard', 
      'profile-mapping-app', 
      'Dashboard', 
      'Shopping_Cart'
    ].includes(repo.name));
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
