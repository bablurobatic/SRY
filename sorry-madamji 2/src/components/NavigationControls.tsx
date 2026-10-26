import React from 'react';

interface NavigationControlsProps {
  currentScreen: number;
  totalScreens: number;
  continueText?: string;
  onPrev: () => void;
  onNext: () => void;
  canContinue?: boolean;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentScreen,
  totalScreens,
  continueText = "Aage badhein →",
  onPrev,
  onNext,
  canContinue = true
}) => {
  return (
    <nav className="navigation-bar" aria-label="Screen pagination controls">
      {currentScreen > 1 ? (
        <button
          type="button"
          className="btn-secondary"
          onClick={onPrev}
          aria-label="Peeche jaayein (Go back to previous screen)"
        >
          <span aria-hidden="true">←</span>
          <span>Peeche</span>
        </button>
      ) : (
        <div style={{ width: 1 }} />
      )}

      {currentScreen < totalScreens && (
        <button
          type="button"
          className="btn-primary"
          onClick={onNext}
          disabled={!canContinue}
          aria-label={`Next screen: ${continueText}`}
        >
          <span>{continueText}</span>
        </button>
      )}
    </nav>
  );
};
