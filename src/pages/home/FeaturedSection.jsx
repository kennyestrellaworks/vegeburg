import React from "react";
import {
  businessInsider,
  forbes,
  techcrunch,
  theNewYorkTimes,
  usaToday,
} from "../../assets";

export const FeaturedSection = () => {
  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 section-featured">
          <div className="wrapper__1920--content section-featured__container">
            <h2 className="sub-heading__primary">As featured in</h2>
            <div className="section-featured__logo">
              <img
                className="section-featured__logo-image"
                src={techcrunch}
                alt="Techcrunch logo"
              />
              <img
                className="section-featured__logo-image"
                src={businessInsider}
                alt="Business insider logo"
              />
              <img
                className="section-featured__logo-image"
                src={theNewYorkTimes}
                alt="The New York times logo"
              />
              <img
                className="section-featured__logo-image"
                src={forbes}
                alt="Forbes logo"
              />
              <img
                className="section-featured__logo-image"
                src={usaToday}
                alt="USA today logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
