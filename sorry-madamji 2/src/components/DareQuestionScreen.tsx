import React from 'react';
import { SCREENS_DATA, OptionItem } from '../data/screensData';
import { ResponseCard } from './ResponseCard';
import { NavigationControls } from './NavigationControls';

interface DareQuestionScreenProps {
  selectedOptionId: string | null;
  onSelectOption: (option: OptionItem) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const DareQuestionScreen: React.FC<DareQuestionScreenProps> = ({
  selectedOptionId,
  onSelectOption,
  onPrev,
  onNext
}) => {
  const screenData = SCREENS_DATA.find((s) => s.id === 6)!;
  const selectedOption = screenData.options?.find((o) => o.id === selectedOptionId);

  return (
    <article className="screen-card">
      <div className="screen-grid reversed">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen6_dare_question.jpg" 
            alt="Anime girl with finger on chin thinking curiously while holding her secret diary with hearts"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>👀 Unfinished Dare</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 6 / 9</span>
          <h2 className="screen-title">{screenData.title}</h2>
          <p className="screen-subtitle">{screenData.subtitle}</p>

          <div className="options-container" role="radiogroup" aria-label="Dare message options">
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
                <span className="ack-icon" aria-hidden="true">🫶</span>
                <p className="ack-text">
                  {selectedOption.responseNote}
                </p>
              </div>
            )}
          </div>

          <NavigationControls
            currentScreen={6}
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
