import React from 'react';
import { NavigationControls } from './NavigationControls';

interface ApologyScreenProps {
  onPrev: () => void;
  onNext: () => void;
}

export const ApologyScreen: React.FC<ApologyScreenProps> = ({ onPrev, onNext }) => {
  return (
    <article className="screen-card">
      <div className="screen-grid reversed">
        <div className="illustration-card">
          <img 
            src="./assets/images/screen2_apology.jpg" 
            alt="Anime boy holding a glowing pink heart saying SORRY with puppy eyes while girl looks pensive in the background"
            loading="lazy"
          />
          <div className="illustration-badge">
            <span>💔 Meri Galti</span>
          </div>
        </div>

        <div className="screen-details">
          <span className="chapter-badge">Chapter 2 / 9</span>
          <h2 className="screen-title">Meri Galti... 💔</h2>
          
          <div className="dialogue-box">
            <p className="dialogue-text">
              Aap kuch bolne wali thi...
            </p>
            <p className="dialogue-text">
              Aur main aapki baat poori sun nahi paaya. 🥺
            </p>
            <p className="dialogue-text">
              Mujhe pata hai aap apni dare complete karne wali thi aur mujhe batane wali thi.
            </p>
            <p className="dialogue-text">
              Main nahi chahta tha ki aapko lage ki main aapko ignore kar raha hoon.
            </p>
            <p className="dialogue-text">
              Aapka upset hona main samajh sakta hoon. ❤️
            </p>
          </div>

          <div className="decorative-note">
            <span aria-hidden="true">📝</span>
            <span>I know... I should explain properly.</span>
          </div>

          <NavigationControls
            currentScreen={2}
            totalScreens={9}
            continueText="Thik hai, aage batao →"
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      </div>
    </article>
  );
};
