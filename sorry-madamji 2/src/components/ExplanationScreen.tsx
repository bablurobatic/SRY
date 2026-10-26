import React from 'react';
import { NavigationControls } from './NavigationControls';

interface ExplanationScreenProps {
  onPrev: () => void;
  onNext: () => void;
}

export const ExplanationScreen: React.FC<ExplanationScreenProps> = ({ onPrev, onNext }) => {
  return (
    <article className="screen-card">
      <div className="screen-grid">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen3_interruption.jpg" 
            alt="Anime boy holding his smartphone helplessly as an older family member takes it away"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>📵 Phone Confiscated</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 3 / 9</span>
          <h2 className="screen-title">Us Waqt Kya Hua Tha? 📱</h2>
          
          <div className="dialogue-box">
            <p className="dialogue-text">
              Tum apni dare complete karne wali thi aur mujhe batane wali thi...
            </p>
            <p className="dialogue-text">
              Lekin achanak ghar walon ne mera phone le liya. 📵
            </p>
            <p className="dialogue-text">
              Main tumhari baat sun hi nahi paaya aur phir so gaya.
            </p>
            <p className="dialogue-text">
              Maine jaan-bujhkar conversation nahi chhodi thi.
            </p>
            <p className="dialogue-text">
              Jab main wapas utha, tab kaafi der ho chuki thi. 🥺
            </p>
          </div>

          <NavigationControls
            currentScreen={3}
            totalScreens={9}
            continueText="Phir aage kya hua? →"
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      </div>
    </article>
  );
};
