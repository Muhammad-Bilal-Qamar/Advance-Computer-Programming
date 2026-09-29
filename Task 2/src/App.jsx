import React, { useState } from "react";
import LikeButton from "./components/LikeButton";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {
  // Global / featured like count tracking for demonstration
  const [featuredLikes, setFeaturedLikes] = useState(0);
  const [clickHistory, setClickHistory] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState("filled");
  const [selectedSize, setSelectedSize] = useState("large");
  const [resetKey, setResetKey] = useState(0);

  // Interactive callback when LikeButton fires its event handler
  const handleLikeEvent = (newCount) => {
    setFeaturedLikes(newCount);
    const now = new Date().toLocaleTimeString();
    setClickHistory((history) => [
      { id: Date.now(), count: newCount, time: now },
      ...history.slice(0, 4), // keep last 5
    ]);
  };

  const handleResetFeatured = () => {
    setFeaturedLikes(0);
    setClickHistory([]);
    setResetKey((k) => k + 1);
  };

  return (
    <div className="app-container">
      {/* Top Navigation / Brand Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="badge-container">
            <span className="topic-badge">State &amp; Event Handling</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="showcase-section">
          <div className="showcase-card">
            <div className="card-header">
              <div>
                <h2 className="section-title">Component Live Demonstration</h2>
                <p className="section-desc">
                  Click the button below to test dynamic state updates in
                  action.
                </p>
              </div>
              <button
                type="button"
                className="reset-btn"
                onClick={handleResetFeatured}
                disabled={featuredLikes === 0 && clickHistory.length === 0}
                title="Reset counter to zero"
              >
                Reset Counter
              </button>
            </div>

            <div className="demo-canvas">
              {/* Counter Display Banner */}
              <div className="counter-display-panel">
                <span className="counter-panel-label">Total Like Count</span>
                <span className="counter-panel-value" key={featuredLikes}>
                  {featuredLikes}
                </span>
                <span className="counter-panel-status">
                  {featuredLikes === 0
                    ? "No likes recorded yet. Click below!"
                    : `Button clicked ${featuredLikes} ${featuredLikes === 1 ? "time" : "times"}`}
                </span>
              </div>

              {/* Central Interactive LikeButton */}
              <div className="interactive-btn-slot">
                <LikeButton
                  key={`${selectedVariant}-${selectedSize}-${resetKey}`}
                  initialCount={0}
                  label="Like"
                  size={selectedSize}
                  variant={selectedVariant}
                  onLike={handleLikeEvent}
                />
              </div>

              {/* Customization controls for previewing styles */}
              <div className="preview-controls">
                <div className="control-group">
                  <span className="control-label">Variant:</span>
                  <div className="segmented-control">
                    {["filled", "outlined", "subtle"].map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={`seg-btn ${selectedVariant === v ? "active" : ""}`}
                        onClick={() => setSelectedVariant(v)}
                      >
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="control-group">
                  <span className="control-label">Size:</span>
                  <div className="segmented-control">
                    {["small", "medium", "large"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`seg-btn ${selectedSize === s ? "active" : ""}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Log */}
              {clickHistory.length > 0 && (
                <div className="event-log-container">
                  <h4 className="log-title">Recent Event Log:</h4>
                  <ul className="log-list">
                    {clickHistory.map((entry) => (
                      <li key={entry.id} className="log-item">
                        <span className="log-time">{entry.time}</span>
                        <span className="log-action">
                          onClick event fired ➔ incremented state to{" "}
                          <strong>{entry.count}</strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Real-world Context: Multiple Independent Instances */}
        <section className="feed-section">
          <div className="feed-header">
            <h2 className="section-title">
              Real-World Application: Isolated State per Component
            </h2>
            <p className="section-desc">
              Each <code>&lt;LikeButton /&gt;</code> maintains its own isolated{" "}
              <code>useState</code> hook instance, ensuring independent counts.
            </p>
          </div>

          <div className="cards-grid">
            <PostCard
              author="Alex Rivers"
              handle="@arivers"
              avatar="AR"
              timestamp="15m ago"
              tag="React Hooks"
              title="Understanding State & Event Handling in React"
              content="React's useState hook pairs cleanly with standard event listeners like onClick to deliver declarative, reactive UI updates without direct DOM manipulation."
              initialLikes={12}
            />

            <PostCard
              author="Sophia Patel"
              handle="@spatel"
              avatar="SP"
              timestamp="1h ago"
              tag="Component Design"
              title="Building Reusable UI Components with Clean Aesthetics"
              content="Focusing on clarity, accessible touch targets, and balanced neutral palettes creates professional interfaces that users appreciate."
              initialLikes={48}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
