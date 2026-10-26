import React from 'react';
import { NavigationControls } from './NavigationControls';

interface MidnightScreenProps {
  onPrev: () => void;
  onNext: () => void;
}

export const MidnightScreen: React.FC<MidnightScreenProps> = ({ onPrev, onNext }) => {
  return (
    <article className="screen-card">
      <div className="screen-grid reversed">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen4_midnight.jpg" 
            alt="Moonlit bedroom with clock showing 12:00 AM, boy waking up shocked looking at missed messages on his phone"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>🌙 12:00 AM Midnight</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 4 / 9</span>
          <h2 className="screen-title">Raat 12 Baje... 🌙</h2>
          
          <div className="dialogue-box">
            <p className="dialogue-text">
              Jab main raat ko utha...
            </p>
            <p className="dialogue-text">
              Tab mujhe pata chala ki meri Madam Ji bahut gussa hain. 🥺
            </p>
            <p className="dialogue-text">
              Aap apni baat batane wali thi, aur main us waqt aapke saath nahi tha.
            </p>
            <p className="dialogue-text">
              Mujhe sach mein afsos hai ki aapko wait karna pada. ❤️
            </p>
          </div>

          <div className="speech-bubble">
            <span aria-hidden="true">💭</span>
            <span>Arey... meri Madam Ji naraz hain? 🥺</span>
          </div>

          <NavigationControls
            currentScreen={4}
            totalScreens={9}
            continueText="Abhi aap kaisa feel kar rahi ho? →"
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      </div>
    </article>
  );
};
