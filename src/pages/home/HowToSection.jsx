import { appScreen1, appScreen2, appScreen3 } from "../../assets";

export const HowToSection = () => {
  return (
    <>
      <section className="wrapper" id="how-to">
        <div className="wrapper__1920 section-how-to">
          <div className="wrapper__1920--content">
            <div className="section-how-to__container wrap__content">
              <div className="section-how-to__header">
                <h2 className="sub-heading__secondary">how it works</h2>
                <h1 className="heading__secondary">
                  A healthier snack starts with these 3 steps!
                </h1>
              </div>
              <div className="section-how-to__items grid grid--2-cols grid--center-v">
                <div className="section-how-to__step-text-box">
                  <p className="section-how-to__step-number">01</p>
                  <div className="section-how-to__details">
                    <h3 className="section-how-to__step-heading heading__tertiary">
                      Choose Your Restaurant or Platform
                    </h3>
                    <p className="section-how-to__step-description">
                      Decide where you want to order from—whether it’s a
                      vegan-friendly restaurant, a fast-food place with vegan
                      options, or a delivery app like Uber Eats, DoorDash, or
                      Grubhub.
                    </p>
                  </div>
                </div>
                <div className="section-how-to__step-image">
                  <div className="section-how-to__step-image-box">
                    <img
                      src={appScreen1}
                      className="section-how-to__step-image-item"
                      alt="iPhone app preferences selection screen"
                    />
                  </div>
                </div>

                <div className="section-how-to__step-image">
                  <div className="section-how-to__step-image-box">
                    <img
                      src={appScreen2}
                      className="section-how-to__step-image-item"
                      alt="iPhone app meal approving plan screen"
                    />
                  </div>
                </div>
                <div className="section-how-to__step-text-box">
                  <p className="section-how-to__step-number">02</p>
                  <div className="section-how-to__details">
                    <h3 className="section-how-to__step-heading heading__tertiary">
                      Customize Your Burger
                    </h3>
                    <p className="section-how-to__step-description">
                      Look through the menu and select a vegan burger.
                      Double-check the ingredients or select plant-based options
                      (patty, bun, sauces, etc.). You can usually add or remove
                      toppings like lettuce, tomato, vegan cheese, or sauces.
                    </p>
                  </div>
                </div>

                <div className="section-how-to__step-text-box">
                  <p className="section-how-to__step-number">03</p>
                  <div className="section-how-to__details">
                    <h3 className="section-how-to__step-heading heading__tertiary">
                      Place Your Order and Enjoy
                    </h3>
                    <p className="section-how-to__step-description">
                      Proceed to checkout, enter delivery or pickup details, and
                      confirm payment. Wait for your order to arrive or pick it
                      up—then enjoy your vegan burger!
                    </p>
                  </div>
                </div>
                <div className="section-how-to__step-image">
                  <div className="section-how-to__step-image-box">
                    <img
                      src={appScreen3}
                      className="section-how-to__step-image-item"
                      alt="iPhone app preferences selection screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
