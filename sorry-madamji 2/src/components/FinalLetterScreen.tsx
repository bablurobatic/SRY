import React from 'react';
import { LETTER_CONTENT } from '../data/screensData';

interface FinalLetterScreenProps {
  onPrev: () => void;
  onReadAgain: () => void;
  onOpenHug: () => void;
}

export const FinalLetterScreen: React.FC<FinalLetterScreenProps> = ({
  onPrev,
  onReadAgain,
  onOpenHug
}) => {
  return (
    <div className="letter-screen-container">
      <article className="letter-paper">
        <div className="letter-decor-stamp" aria-hidden="true">
          <span>BABLU</span>
          <span>MADAM JI</span>
          <span>💌 12 AM</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <span className="chapter-badge">Final Chapter 💌</span>
          <h2 className="screen-title" style={{ marginTop: 8 }}>
            Mera Dil Se Sorry Letter 💌
          </h2>
        </div>

        {/* Hero couple art atop the letter */}
        <div 
          className="illustration-card" 
          style={{ maxHeight: 340, marginBottom: 28, borderRadius: 18 }}
        >
          <img 
            src="./assets/images/screen9_letter.jpg" 
            alt="Anime boy and girl smiling gently together in bedroom with handwritten apology letter"
            loading="lazy"
          />
        </div>

        <h3 className="letter-salutation">
          {LETTER_CONTENT.salutation}
        </h3>

        <div className="letter-body">
          {LETTER_CONTENT.paragraphs.map((p, idx) => (
            <p key={idx}>
              {p}
            </p>
          ))}
        </div>

        <p className="letter-signoff">
          {LETTER_CONTENT.signOff}
        </p>

        <div className="letter-actions-center">
          <button
            type="button"
            className="btn-hug"
            onClick={onOpenHug}
            aria-label="Ask for a small virtual hug"
          >
            <span>Ek Chhota Hug? 🧸❤️</span>
          </button>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={onPrev}
            >
              <span>← Peeche</span>
            </button>

            <button
              type="button"
              className="btn-read-again"
              onClick={onReadAgain}
            >
              <span>Shuru Se Padhein ↻</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
