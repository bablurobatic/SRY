import React, { useEffect } from 'react';
import { HUG_MODAL_CONTENT } from '../data/screensData';

interface VirtualHugModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualHugModal: React.FC<VirtualHugModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hug-modal-title"
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-image-box">
          <img 
            src="./assets/images/virtual_hug.jpg" 
            alt="Two cute fluffy teddy bears hugging each other warmly with glowing hearts"
          />
        </div>
        <h3 id="hug-modal-title" className="modal-title">
          {HUG_MODAL_CONTENT.title}
        </h3>
        <p className="modal-message-1">
          {HUG_MODAL_CONTENT.message1}
        </p>
        <p className="modal-message-2">
          {HUG_MODAL_CONTENT.message2}
        </p>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          autoFocus
        >
          <span>Pyaar Se Close Karein 😊❤️</span>
        </button>
      </div>
    </div>
  );
};
