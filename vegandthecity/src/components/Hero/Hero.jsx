export default function Hero({ scrollTo }) {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="hero-title">
          <h1 className="hero-title-line tracking-widest pl-4 pb-1">VEG</h1>
          <span className="and-the-hero-container">
            <h2 className="pr-14 sm:pr-12">AND</h2>
            <h2>THE</h2>
          </span>
          <h1 className="hero-title-line">CITY</h1>
          <h3 className="hero-motto">Fast & Veggie </h3>
          <div className="cta-button-container">
            <span className="cta-button" onClick={(e) => scrollTo()}>
              Search Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
