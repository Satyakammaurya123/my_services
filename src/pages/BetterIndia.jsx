import "./BetterIndia.css";

export default function BetterIndia() {
  return (
    <div className="better-india-container">
      {/* Population Box */}
      <div className="info-box">
        <h2>Population</h2>
        <p>
          India’s current population is over <strong>1.4 billion</strong>. 
          Rapid growth has led to challenges such as unemployment, pressure on 
          infrastructure, and environmental concerns.
        </p>
      </div>

      {/* Top Rich People Box */}
      <div className="info-box">
        <h2>Top 10 Richest People in India</h2>
        <ul>
          <li>Mukesh Ambani – $95B</li>
          <li>Gautam Adani – $68B</li>
          <li>Shiv Nadar – $32B</li>
          <li>Cyrus Poonawalla – $25B</li>
          <li>Radhakishan Damani – $20B</li>
          <li>Savitri Jindal – $18B</li>
          <li>Kumar Birla – $17B</li>
          <li>Dilip Shanghvi – $16B</li>
          <li>Uday Kotak – $14B</li>
          <li>Sunil Mittal – $13B</li>
        </ul>
      </div>

      {/* Earning Skills Box */}
      <div className="info-box">
        <h2>Earning Skills</h2>
        <p>
          Some of the most in-demand earning skills in India today include:
        </p>
        <ul>
          <li>Software Development (AI, ML, Cloud, Web)</li>
          <li>Data Science & Analytics</li>
          <li>Digital Marketing</li>
          <li>Content Creation</li>
          <li>Stock Market & Investment Strategies</li>
          <li>Entrepreneurship</li>
        </ul>
      </div>
    </div>
  );
}
