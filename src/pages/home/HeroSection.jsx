import chefAndBurger from "../../assets/images/chef-and-burger.png";

export const HeroSection = ({ reference }) => {
  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 section-hero" ref={reference}>
          <div className="wrapper__1920--content">
            {/* *** */}
            <div className="section-hero__container">
              <div className="section-hero__box-one">
                <div className="section-hero__box-one-wrap">
                  <h1 className="section-hero__heading heading__primary">
                    Enjoy a wholesome burger at your doorstep—every day
                  </h1>
                  <p className="section-hero__description">
                    The smart, 365-day vegan burger subscription that helps you
                    eat healthy again—customized to your taste and nutritional
                    needs.
                  </p>
                  <div className="section-hero__two-buttons">
                    <div className="section-hero__two-buttons-item">
                      <a className="btn btn__full" href="#how-to">
                        Learn more ↓
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* *** */}
              <div className="section-hero__box-two">
                <img
                  className="section-hero__hero-image"
                  src={chefAndBurger}
                  alt="Chef and burger"
                />
              </div>
            </div>
            {/* *** */}
          </div>
        </div>
      </section>
    </>
  );
};
