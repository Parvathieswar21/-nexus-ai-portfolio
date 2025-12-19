
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsChart from './components/SkillsChart';
import AILab from './components/AILab';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'lab'>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setActiveTab('projects')} />
            <SkillsChart />
          </>
        );
      case 'projects':
        return <ProjectGallery />;
      case 'lab':
        return <AILab />;
      default:
        return <Hero onExplore={() => setActiveTab('projects')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
