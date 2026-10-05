import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { DashboardPanel } from './components/DashboardPanel';
import { AttendancePanel } from './components/AttendancePanel';
import { ChatAssistant } from './components/ChatAssistant';
import { EventsPanel } from './components/EventsPanel';
import { AIStudio } from './components/AIStudio';
import { TranslatorPanel } from './components/TranslatorPanel';
import { PrintPanel } from './components/PrintPanel';
import { TransportPanel } from './components/TransportPanel';
import { CourseCatalogPanel } from './components/CourseCatalogPanel';
import { StudyBuddiesPanel } from './components/StudyBuddiesPanel';
import { DigitalIdPanel } from './components/DigitalIdPanel';
import { FoodOrderingPanel } from './components/FoodOrderingPanel';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Apply theme class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardPanel onNavigate={setCurrentView} />;
      case 'digital_id':
        return <DigitalIdPanel />;
      case 'buddies':
        return <StudyBuddiesPanel />;
      case 'courses':
        return <CourseCatalogPanel />;
      case 'attendance':
        return <AttendancePanel />;
      case 'chat':
        return <ChatAssistant />;
      case 'events':
        return <EventsPanel />;
      case 'studio':
        return <AIStudio />;
      case 'translator':
        return <TranslatorPanel />;
      case 'print':
        return <PrintPanel />;
      case 'food':
        return <FoodOrderingPanel />;
      case 'transport':
        return <TransportPanel />;
      default:
        return <DashboardPanel onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      setCurrentView={setCurrentView}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
    >
      {renderView()}
    </Layout>
  );
};

export default App;