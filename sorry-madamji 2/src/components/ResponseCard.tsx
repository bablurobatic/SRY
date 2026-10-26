import React from 'react';
import { OptionItem } from '../data/screensData';

interface ResponseCardProps {
  option: OptionItem;
  isSelected: boolean;
  onSelect: (option: OptionItem) => void;
}

export const ResponseCard: React.FC<ResponseCardProps> = ({
  option,
  isSelected,
  onSelect
}) => {
  return (
    <button
      type="button"
      className={`option-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect(option);
        }
      }}
    >
      <span className="option-icon" aria-hidden="true">
        {option.icon}
      </span>
      <span className="option-label">
        {option.label}
      </span>
      <span className="option-check" aria-hidden="true">
        {isSelected ? '✓' : ''}
      </span>
    </button>
  );
};
