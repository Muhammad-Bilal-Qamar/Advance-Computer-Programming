import React, { useState } from 'react';
import './LikeButton.css';

/**
 * LikeButton Component
 * 
 * Implements Task 2: State & Event Handling (useState)
 * - Uses React's useState Hook to maintain the like count state
 * - Implements dynamic onClick event handling to increment count on each click
 * 
 * @param {Object} props
 * @param {number} [props.initialCount=0] - Initial number of likes
 * @param {string} [props.label="Like"] - Text label for the button
 * @param {string} [props.size="medium"] - 'small' | 'medium' | 'large'
 * @param {string} [props.variant="filled"] - 'filled' | 'outlined' | 'subtle'
 * @param {Function} [props.onLike] - Optional callback triggered on like
 */
export default function LikeButton({
  initialCount = 0,
  label = 'Like',
  size = 'medium',
  variant = 'filled',
  onLike,
}) {
  // 1. Declare state variable 'likes' and updater function 'setLikes'
  const [likes, setLikes] = useState(initialCount);
  const [isBouncing, setIsBouncing] = useState(false);

  // 2. Event handler that dynamically increments the total like count
  const handleLikeClick = () => {
    setLikes((prevLikes) => {
      const newTotal = prevLikes + 1;
      if (typeof onLike === 'function') {
        onLike(newTotal);
      }
      return newTotal;
    });

    // Trigger micro-animation feedback
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 300);
  };

  return (
    <div className={`like-btn-container like-btn-${size}`}>
      <button
        type="button"
        className={`like-btn like-btn--${variant} ${isBouncing ? 'is-bouncing' : ''}`}
        onClick={handleLikeClick}
        aria-label={`${label} button, current count is ${likes}`}
      >
        <svg
          className="like-btn-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="like-btn-label">{label}</span>
        <span className="like-btn-counter" data-testid="like-counter">
          {likes.toLocaleString()}
        </span>
      </button>
    </div>
  );
}
