import React, { useState } from 'react';

interface TeddyCompanionProps {
  currentScreen: number;
  onOpenHug?: () => void;
}

export const TeddyCompanion: React.FC<TeddyCompanionProps> = ({ currentScreen, onOpenHug }) => {
  const [clicked, setClicked] = useState(false);

  const getCheerText = () => {
    switch (currentScreen) {
      case 1:
        return "Bablu's Sorry Teddy 🧸";
      case 2:
        return "I'm really sorry 🥺";
      case 3:
        return "Phone le liya tha 📵";
      case 4:
        return "12 baje utha tha 🌙";
      case 5:
        return "Madam Ji gussa hain? 🥺";
      case 6:
        return "Aapki dare sunni hai 💌";
      case 7:
        return "Pending dares continue? 😄";
      case 8:
        return "Plz maaf kar do na ❤️";
      case 9:
        return "Virtual hug for Madam Ji 🧸";
      default:
        return "Sorry Madam Ji ❤️";
    }
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
    if (onOpenHug && currentScreen === 9) {
      onOpenHug();
    }
  };

  return (
    <aside 
      className="teddy-companion-wrapper" 
      aria-label="Apology Teddy Companion holding Sorry board"
    >
      <div 
        className="teddy-swing-container"
        onClick={handleClick}
        title="Bablu's Apology Teddy — Click for a gentle wiggle!"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <div className="teddy-rope-top" aria-hidden="true" />
        <div className={`teddy-frame ${clicked ? 'teddy-wiggle' : ''}`}>
          <img 
            src="./assets/images/teddy_swing.jpg" 
            alt="Cute fluffy teddy bear on a wooden swing holding a board saying Sorry"
            loading="eager"
          />
        </div>
        <span className="teddy-tooltip">
          {getCheerText()}
        </span>
      </div>
    </aside>
  );
};
