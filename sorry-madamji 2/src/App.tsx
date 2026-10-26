import React, { useState, useEffect, useCallback } from 'react';
import { ProgressHeader } from './components/ProgressHeader';
import { TeddyCompanion } from './components/TeddyCompanion';
import { FloatingHearts } from './components/FloatingHearts';
import { VirtualHugModal } from './components/VirtualHugModal';
import { IntroScreen } from './components/IntroScreen';
import { ApologyScreen } from './components/ApologyScreen';
import { ExplanationScreen } from './components/ExplanationScreen';
import { MidnightScreen } from './components/MidnightScreen';
import { MoodQuestionScreen } from './components/MoodQuestionScreen';
import { DareQuestionScreen } from './components/DareQuestionScreen';
import { DarePromiseScreen } from './components/DarePromiseScreen';
import { ForgivenessScreen } from './components/ForgivenessScreen';
import { FinalLetterScreen } from './components/FinalLetterScreen';
import { OptionItem } from './data/screensData';
import { romanticBgm } from './utils/romanticAudio';

interface UserAnswers {
  mood: string | null;
  dareQuestion: string | null;
  darePromise: string | null;
  forgiveness: string | null;
}

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [answers, setAnswers] = useState<UserAnswers>({
    mood: null,
    dareQuestion: null,
    darePromise: null,
    forgiveness: null
  });
  const [isHugOpen, setIsHugOpen] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNext = useCallback(() => {
    if (currentScreen < 9) {
      setCurrentScreen((prev) => prev + 1);
    }
  }, [currentScreen]);

  const handlePrev = useCallback(() => {
    if (currentScreen > 1) {
      setCurrentScreen((prev) => prev - 1);
    }
  }, [currentScreen]);

  const handleReadAgain = useCallback(() => {
    setCurrentScreen(1);
    setIsHugOpen(false);
  }, []);

  const handleToggleAudio = useCallback(() => {
    const newState = romanticBgm.toggle();
    setIsPlayingAudio(newState);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        // Only advance if allowed
        if (currentScreen === 5 && !answers.mood) return;
        if (currentScreen === 6 && !answers.dareQuestion) return;
        if (currentScreen === 7 && !answers.darePromise) return;
        if (currentScreen === 8 && !answers.forgiveness) return;
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, answers, handleNext, handlePrev]);

  return (
    <div className="app-wrapper">
      <FloatingHearts />

      <ProgressHeader
        currentScreen={currentScreen}
        totalScreens={9}
        onSelectScreen={(id) => setCurrentScreen(id)}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      <main className="main-content" id="main-content">
        <div className="content-container">
          {currentScreen === 1 && (
            <IntroScreen onNext={handleNext} />
          )}

          {currentScreen === 2 && (
            <ApologyScreen onPrev={handlePrev} onNext={handleNext} />
          )}

          {currentScreen === 3 && (
            <ExplanationScreen onPrev={handlePrev} onNext={handleNext} />
          )}

          {currentScreen === 4 && (
            <MidnightScreen onPrev={handlePrev} onNext={handleNext} />
          )}

          {currentScreen === 5 && (
            <MoodQuestionScreen
              selectedOptionId={answers.mood}
              onSelectOption={(opt: OptionItem) =>
                setAnswers((prev) => ({ ...prev, mood: opt.id }))
              }
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}

          {currentScreen === 6 && (
            <DareQuestionScreen
              selectedOptionId={answers.dareQuestion}
              onSelectOption={(opt: OptionItem) =>
                setAnswers((prev) => ({ ...prev, dareQuestion: opt.id }))
              }
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}

          {currentScreen === 7 && (
            <DarePromiseScreen
              selectedOptionId={answers.darePromise}
              onSelectOption={(opt: OptionItem) =>
                setAnswers((prev) => ({ ...prev, darePromise: opt.id }))
              }
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}

          {currentScreen === 8 && (
            <ForgivenessScreen
              selectedOptionId={answers.forgiveness}
              onSelectOption={(opt: OptionItem) =>
                setAnswers((prev) => ({ ...prev, forgiveness: opt.id }))
              }
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}

          {currentScreen === 9 && (
            <FinalLetterScreen
              onPrev={handlePrev}
              onReadAgain={handleReadAgain}
              onOpenHug={() => setIsHugOpen(true)}
            />
          )}
        </div>
      </main>

      <TeddyCompanion
        currentScreen={currentScreen}
        onOpenHug={() => setIsHugOpen(true)}
      />

      <VirtualHugModal
        isOpen={isHugOpen}
        onClose={() => setIsHugOpen(false)}
      />
    </div>
  );
};
export default App;
