import React from 'react';
import LikeButton from './LikeButton';
import './PostCard.css';

/**
 * PostCard Component
 * Displays a realistic post card utilizing the isolated LikeButton component.
 */
export default function PostCard({
  author,
  handle,
  avatar,
  timestamp,
  title,
  content,
  tag,
  initialLikes = 0,
}) {
  return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-avatar" aria-hidden="true">
          {avatar}
        </div>
        <div className="post-author-info">
          <div className="post-author-name-row">
            <span className="post-author-name">{author}</span>
            <span className="post-author-handle">{handle}</span>
          </div>
          <span className="post-timestamp">{timestamp}</span>
        </div>
        {tag && <span className="post-tag">{tag}</span>}
      </header>

      <div className="post-body">
        <h3 className="post-title">{title}</h3>
        <p className="post-text">{content}</p>
      </div>

      <footer className="post-footer">
        <LikeButton
          initialCount={initialLikes}
          label="Like"
          size="medium"
          variant="outlined"
        />
        <span className="post-footer-hint">Click like to increment this post's counter</span>
      </footer>
    </article>
  );
}
