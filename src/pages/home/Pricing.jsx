import { ButtonCTA } from "../../components/ButtonCTA";

export const Pricing = () => {
  return (
    <>
      <section className="wrapper" id="pricing">
        <div className="wrapper__1920 section-pricing">
          <div className="wrapper__1920--content">
            <div className="section-pricing__header">
              <h2 className="sub-heading__secondary">pricing</h2>
              <h1 className="heading__secondary">
                Eating well without breaking the bank
              </h1>
            </div>
            <div className="section-pricing__box grid grid--2-cols margin-bottom-md">
              <div className="section-pricing__plan section-pricing__plan-starter">
                <header className="section-pricing__plan-header">
                  <p className="section-pricing__plan-name">Starter</p>
                  <p className="section-pricing__plan-price">
                    <span>$</span>399
                  </p>
                  <p className="section-pricing__plan-text">
                    per month. That's just $13 per meal!
                  </p>
                </header>
                <ul className="section-pricing__list">
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>1 meal per day</span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Order from 11am to 9pm</span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Delivery is free</span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="close-outline"
                    ></ion-icon>
                    <span>Get access to latest recipes</span>
                  </li>
                </ul>
                <div className="section-pricing__sign-up">
                  <ButtonCTA
                    ctaName={"Start eating well"}
                    classes={"btn btn__full"}
                  />
                </div>
              </div>

              <div className="section-pricing__plan section-pricing__plan-complete">
                <header className="section-pricing__plan-header">
                  <p className="section-pricing__plan-name">Complete</p>
                  <p className="section-pricing__plan-price">
                    <span>$</span>649
                  </p>
                  <p className="section-pricing__plan-text">
                    per month. That's just $11 per meal!
                  </p>
                </header>
                <ul className="section-pricing__list">
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>
                      <strong>2 meals</strong> per day
                    </span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>
                      Order <strong>24/7</strong>
                    </span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span>Delivery is free</span>
                  </li>
                  <li className="section-pricing__list-item">
                    <ion-icon
                      className="section-pricing__list-icon"
                      name="close-outline"
                    ></ion-icon>
                    <span>Get access to latest recipes</span>
                  </li>
                </ul>
                <div className="section-pricing__sign-up">
                  <ButtonCTA
                    ctaName={"Start eating well"}
                    classes={"btn btn__full"}
                  />
                </div>
              </div>
            </div>
            <aside className="section-pricing__plan-details">
              Prices include all applicable taxes. You can cancel at any time.
              Both plans include the following:
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
