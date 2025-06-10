import burgerImage from "../../assets/images/featured-section-burger-2.png";

export const Features2Section = () => {
  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 section-featured-two">
          <div className="wrapper__1920--content">
            <section className="section-featured-two__container">
              <div className="section-featured-two__left">
                <div className="grid grid--2-cols">
                  <div className="section-featured-two__item">
                    <div className="section-featured-two__icon">
                      <svg
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z"></path>
                      </svg>
                    </div>
                    <p className="section-featured-two__title">
                      Say goodbye to cooking!
                    </p>
                    <p className="section-featured-two__text">
                      Enjoy our subscription service all year round — even on
                      major holidays.
                    </p>
                  </div>
                  <div className="section-featured-two__item">
                    <div className="section-featured-two__icon">
                      <svg
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 2.84c1.402 2.71 1.445 5.241 2.977 10.4 1.855 5.341 8.703 5.701 9.21 5.711.46.726 1.513 1.704 3.926 2.21l.268-1.272c-2.082-.436-2.844-1.239-3.106-1.68l-.005.006c.087-.484 1.523-5.377-1.323-9.352C7.182 3.583 0 2.84 0 2.84zm24 .84c-3.898.611-4.293-.92-11.473 3.093a11.879 11.879 0 0 1 2.625 10.05c3.723-1.486 5.166-3.976 5.606-6.466 0 0 1.27-4.716 3.242-6.677zM12.527 6.773l-.002-.002v.004l.002-.002zM2.643 5.22s5.422 1.426 8.543 11.543c-2.945-.889-4.203-3.796-4.63-5.168h.006a15.863 15.863 0 0 0-3.92-6.375z"></path>
                      </svg>
                    </div>
                    <p className="section-featured-two__title">
                      Fresh and Organic
                    </p>
                    <p className="section-featured-two__text">
                      Our chefs prepare your meals using only locally sourced,
                      fresh, and organic ingredients.
                    </p>
                  </div>
                  <div className="section-featured-two__item">
                    <div className="section-featured-two__icon">
                      <svg
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"></path>
                      </svg>
                    </div>
                    <p className="section-featured-two__title">Zero Waste</p>
                    <p className="section-featured-two__text">
                      All our partners package your meals exclusively in
                      reusable containers.
                    </p>
                  </div>
                  <div className="section-featured-two__item">
                    <div className="section-featured-two__icon">
                      <svg
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeWidth="2"
                          d="M18,4 L18,0 L18,4 Z M7,18 L5,18 L7,18 Z M19,18 L9,18 L19,18 Z M7,14 L5,14 L7,14 Z M19,14 L9,14 L19,14 Z M6,4 L6,0 L6,4 Z M1,9 L23,9 L1,9 Z M1,23 L23,23 L23,4 L1,4 L1,23 Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="section-featured-two__title">
                      Flexible Plans
                    </p>
                    <p className="section-featured-two__text">
                      Taking a trip? You can pause your subscription anytime and
                      get a refund for any unused days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="section-featured-two__right">
                <img
                  className="section-featured-two__right-image"
                  src={burgerImage}
                  alt="Burger png"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
