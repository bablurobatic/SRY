import React from 'react';
import { SCREENS_DATA, OptionItem } from '../data/screensData';
import { ResponseCard } from './ResponseCard';
import { NavigationControls } from './NavigationControls';

interface MoodQuestionScreenProps {
  selectedOptionId: string | null;
  onSelectOption: (option: OptionItem) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const MoodQuestionScreen: React.FC<MoodQuestionScreenProps> = ({
  selectedOptionId,
  onSelectOption,
  onPrev,
  onNext
}) => {
  const screenData = SCREENS_DATA.find((s) => s.id === 5)!;
  const selectedOption = screenData.options?.find((o) => o.id === selectedOptionId);

  return (
    <article className="screen-card">
      <div className="screen-grid">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen5_mood.jpg" 
            alt="Anime girl with crossed arms sitting on bed pouting cutely with puffed cheeks"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>😤 Mood Check</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 5 / 9</span>
          <h2 className="screen-title">{screenData.title}</h2>
          <p className="screen-subtitle">{screenData.subtitle}</p>

          <div className="options-container" role="radiogroup" aria-label="Mood options">
            <div className="options-grid">
              {screenData.options?.map((opt) => (
                <ResponseCard
                  key={opt.id}
                  option={opt}
                  isSelected={selectedOptionId === opt.id}
                  onSelect={onSelectOption}
                />
              ))}
            </div>

            {selectedOption && (
              <div className="acknowledgement-box" role="status" aria-live="polite">
                <span className="ack-icon" aria-hidden="true">💌</span>
                <p className="ack-text">
                  {selectedOption.responseNote}
                </p>
              </div>
            )}
          </div>

          <NavigationControls
            currentScreen={5}
            totalScreens={9}
            continueText={screenData.continueText}
            onPrev={onPrev}
            onNext={onNext}
            canContinue={Boolean(selectedOptionId)}
          />
        </div>
      </div>
    </article>
  );
};
