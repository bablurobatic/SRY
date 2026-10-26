import React from 'react';
import { SCREENS_DATA } from '../data/screensData';

interface ProgressHeaderProps {
  currentScreen: number;
  totalScreens: number;
  onSelectScreen: (screenId: number) => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  currentScreen,
  totalScreens,
  onSelectScreen,
  isPlayingAudio,
  onToggleAudio
}) => {
  const currentScreenData = SCREENS_DATA.find((s) => s.id === currentScreen);
  const progressPercent = Math.round((currentScreen / totalScreens) * 100);

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        <div 
          className="logo-area" 
          onClick={() => onSelectScreen(1)}
          role="button"
          tabIndex={0}
          title="Back to beginning"
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSelectScreen(1);
          }}
        >
          <span className="logo-icon" aria-hidden="true">💌</span>
          <span>Sorry, Madam Ji ❤️</span>
        </div>

        {/* Desktop Navigation Pills */}
        <nav className="desktop-nav" aria-label="Chapters Navigation">
          {SCREENS_DATA.map((screen) => {
            const isCurrent = screen.id === currentScreen;
            const isCompleted = screen.id < currentScreen;
            return (
              <button
                key={screen.id}
                type="button"
                className={`nav-pill ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => onSelectScreen(screen.id)}
                aria-current={isCurrent ? 'step' : undefined}
                title={`${screen.badge}: ${screen.title}`}
              >
                <span>{screen.id}.</span>
                <span>{screen.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Audio Toggle & Quick Actions */}
        <div className="header-actions">
          <button
            type="button"
            className={`audio-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={onToggleAudio}
            aria-label={isPlayingAudio ? "Pause romantic background music" : "Play romantic background music"}
            title={isPlayingAudio ? "Pause sweet music" : "Play romantic melody 🎵"}
          >
            <span className="sound-wave" aria-hidden="true">
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
            </span>
            <span>{isPlayingAudio ? 'Music On' : 'Music Off'}</span>
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="progress-bar-wrapper">
        <div className="progress-info">
          <span>{currentScreenData?.badge || `Chapter ${currentScreen}`}</span>
          <span className="progress-counter">
            {currentScreen} / {totalScreens} ({progressPercent}%)
          </span>
        </div>
        <div 
          className="progress-track" 
          role="progressbar" 
          aria-valuenow={currentScreen} 
          aria-valuemin={1} 
          aria-valuemax={totalScreens}
        >
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
      </div>
    </header>
  );
};
