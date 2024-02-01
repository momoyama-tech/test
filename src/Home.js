import React from 'react';
import Top from './components/Top'
import EventCard from './components/EventCard'
import ProjectCard from './components/ProjectCard';

const Home = () => {
  return (
    <div>
      <Top/>
      <EventCard/>
      <ProjectCard/>
      <h1>Welcome to TechHack</h1>
      {/* その他のホームページのコンテンツ */}
    </div>
  );
}

export default Home;
