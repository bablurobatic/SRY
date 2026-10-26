import React from 'react';
import { SCREENS_DATA, OptionItem } from '../data/screensData';
import { ResponseCard } from './ResponseCard';
import { NavigationControls } from './NavigationControls';

interface DarePromiseScreenProps {
  selectedOptionId: string | null;
  onSelectOption: (option: OptionItem) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const DarePromiseScreen: React.FC<DarePromiseScreenProps> = ({
  selectedOptionId,
  onSelectOption,
  onPrev,
  onNext
}) => {
  const screenData = SCREENS_DATA.find((s) => s.id === 7)!;
  const selectedOption = screenData.options?.find((o) => o.id === selectedOptionId);

  return (
    <article className="screen-card">
      <div className="screen-grid">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen7_dares.jpg" 
            alt="Cozy room desk with dare challenge list, cute envelopes, phone, warm lights"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>💌 Romantic Dares</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 7 / 9</span>
          <h2 className="screen-title">{screenData.title}</h2>

          <div className="dialogue-box">
            {screenData.paragraphs?.map((p, idx) => (
              <p key={idx} className="dialogue-text">
                {p}
              </p>
            ))}
          </div>

          <div className="options-container" role="radiogroup" aria-label="Dares continuation choices">
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
                <span className="ack-icon" aria-hidden="true">💖</span>
                <p className="ack-text">
                  {selectedOption.responseNote}
                </p>
              </div>
            )}
          </div>

          <NavigationControls
            currentScreen={7}
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
