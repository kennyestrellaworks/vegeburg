import { burgerInPan } from "../../assets";

export const FoodExcellence = () => {
  return (
    <section className="wrapper">
      <div className="wrapper__1920 excellence">
        <div className="wrapper__1920--content">
          <div className="excellence__container">
            <div className="excellence__left">
              <div className="excellence__content">
                <h1 className="excellence__heading heading__tertiary">
                  Enjoy a Taste Like No Other, Every Day at VegeBurg!
                </h1>
                <h1 className="excellence__tagline">
                  You’ll never understand what makes our vegan burgers so
                  unbelievably good—until you take that first bite!
                </h1>
                <p className="excellence__paragraph">
                  A fresh sesame bun, a sizzling hot patty, our signature sauce,
                  perfectly melted cheese, and carefully selected ingredients —
                  that’s what makes our burgers irresistibly delicious and a
                  local favorite in LA. Every dish is crafted with care, and
                  we're always experimenting with bold new flavors. Spot our
                  food truck on the streets of Los Angeles or order for delivery
                  — one bite and you'll never look at other burgers the same way
                  again!
                </p>
              </div>
            </div>
            <div className="excellence__right">
              <img
                className="excellence__picture"
                src={burgerInPan}
                alt={burgerInPan}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
