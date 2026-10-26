import React from 'react';
import { NavigationControls } from './NavigationControls';

interface IntroScreenProps {
  onNext: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  return (
    <article className="screen-card">
      <div className="screen-grid">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen1_hero.jpg" 
            alt="Anime boy in black hoodie looking sincerely and apologetically at anime girl in pink sweater sitting on bed"
            loading="eager"
          />
          <div className="illustration-badge">
            <span>✨ Sweet Apology</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 1 / 9</span>
          <h1 className="screen-title">Hey Madam Ji ❤️</h1>
          
          <div className="dialogue-box">
            <p className="dialogue-text">
              Lagta hai aap mujhse gussa hain... 🥺
            </p>
            <p className="dialogue-text">
              Aur honestly, aapka gussa hona bhi samajh sakta hoon.
            </p>
            <p className="dialogue-text">
              Lekin main chahta hoon ki aap ek baar meri baat suno... please? ❤️
            </p>
          </div>

          <NavigationControls
            currentScreen={1}
            totalScreens={9}
            continueText="Chalo, sunte hain →"
            onPrev={() => {}}
            onNext={onNext}
          />
        </div>
      </div>
    </article>
  );
};
