import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Home Page</h2>
      <p>This is your e-commerce homepage content.</p>

      {/* ✅ Three responsive boxes below */}
      <div className="home-boxes">
        <div className="home-box">
          <h3>My Services</h3>
          <p>Explore a variety of personalized offerings curated just for you.
            Here you will get all the services related to your health complete healthcare product and curated adivces to follow
            we will help you in your weightloss journey and filling new energy inside you.
          </p>
        </div>
        <div className="home-box">
          <h3>Spiritual World</h3>
          <p>Discover insights, guidance, and tools for inner peace and growth.
          Remember the power of lord krishna , who helps arjun to sustain in the war,
          This kaliyug is the war and we are arjun choose krishna ji to helping,
          Hare ram hare ram , Ram ram hare hare, hare krishna hare krishna krishna krishna hare hare
          </p>
        </div>
        <div className="home-box">
          <h3>Manifestation Power</h3>
          <p>Unlock the energy within you to turn visions into reality.
            Manifesting happiness is very very important, people has always underated this 
            thats why most peoples are depressed now a days. we should always say to universe
            i am chossing happiness, i am choosing to be happy, universe is fullfilling my wishes 
            it is helping me to achieve my goals which are love, money , health , power and happiness and peace
          </p>
        </div>
      </div>
    </div>
  );
}
