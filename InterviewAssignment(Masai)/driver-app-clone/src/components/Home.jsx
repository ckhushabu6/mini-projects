// Home.jsx

import "./style/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Drive Smart. Connect Better.</h1>

        <p>
          The smartest driver booking and networking platform in India —
          designed for the next generation of mobility.
        </p>
      </div>

      {/* Buttons */}
      <div className="btn-container">
        <button className="red-btn">Book a Driver</button>

        <button className="white-btn">Join as a Driver</button>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>
          On-Demand Driver Services with Trust & Convenience
        </h2>

        <p>
          Get a reliable ride in just a few taps. Our trusted drivers ensure
          smooth, hassle-free journeys.
        </p>

        <p>
          Start your journey today with our secure, efficient, and seamless
          driver network.
        </p>
      </div>

      {/* Cards Section */}
      <div className="card-container">

        <div className="card">
          <h4>Fast Response</h4>

          <p>
            Receive instant driver confirmation immediately after booking.
          </p>
        </div>

        <div className="card">
          <h4>Easy Booking</h4>

          <p>
            Book your ride effortlessly with just a few taps on our web-app.
          </p>
        </div>

        <div className="card">
          <h4>Trusted Drivers</h4>

          <p>
            All drivers are verified for your safety and convenience.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;