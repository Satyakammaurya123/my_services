import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      <p>This is your e-commerce homepage content.</p>

      {/* ✅ Six responsive boxes below */}
      <div className="home-boxes">
        <div className="home-box">
          <h3>My Services</h3>
          <p>
            Explore a variety of personalized offerings curated just for you.
            Here you will get all the services related to your health complete healthcare product and curated advices to follow.
            We will help you in your weight loss journey and fill new energy inside you.
          </p>
        </div>

        <div className="home-box">
          <h3>Spiritual World</h3>
          <p>
            Discover insights, guidance, and tools for inner peace and growth.
            Remember the power of Lord Krishna who helped Arjun in the war.
            This Kaliyug is the war and we are Arjun — choose Krishna for guidance.
          </p>
        </div>

        <div className="home-box">
          <h3>Manifestation Power</h3>
          <p>
            Unlock the energy within you to turn visions into reality.
            Choosing happiness daily helps remove negativity and attracts peace,
            success, health, and fulfillment into life.
          </p>
        </div>

        {/* ✅ New 4th box */}
        <div className="home-box">
          <h3>PlayStation</h3>
          <p>
            Dive into the world of gaming and entertainment.
            Explore PlayStation content, games, experiences, and immersive digital fun
            that refreshes the mind and fuels creativity.
          </p>
        </div>

        {/* ✅ New 5th box */}
        <div className="home-box">
          <h3>SpiritualWorld</h3>
          <p>
            A deeper spiritual journey focused on mindfulness, devotion,
            meditation, and self-awareness to connect the soul with higher energy.
          </p>
        </div>

        {/* ✅ New 6th box */}
        <div className="home-box">
          <h3>KnowIndia</h3>
          <p>
            Explore the rich culture, heritage, history, and wisdom of India.
            Learn about traditions, values, diversity, and the stories that shaped the nation.
          </p>
        </div>
      </div>
    </div>
  );
}
