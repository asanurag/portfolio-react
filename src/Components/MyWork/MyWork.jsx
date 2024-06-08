// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import { fetchRepositories } from '../Services/githubService';

const MyWork = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const repos = await fetchRepositories();
      setRepositories(repos);
    };

    getRepositories();
  }, []);

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Work</h1>
        <img src={theme_pattern} alt='theme_pattern' />
      </div>
      <div className='mywork-container'>
        {repositories.map((repo, index) => (
          <div key={index} className='work-item'>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              View Repository
            </a>
          </div>
        ))}
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='arrow_icon' />
      </div>
    </div>
  );
};

export default MyWork;
