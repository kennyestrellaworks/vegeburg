import comboMeal1 from "../../assets/images/combo-meal-1.jpg";
import comboMeal2 from "../../assets/images/combo-meal-2.jpg";
import comboMeal3 from "../../assets/images/combo-meal-3.jpg";
import { ButtonCTA } from "../../components/ButtonCTA";

// console.log("comboMeal1", comboMeal1);

export const ComboMeal = () => {
  const comboMeals = [
    {
      title: "Classic Vegan Combo",
      description:
        "A hearty vegan burger with sweet potato fries and a refreshing mint lemonade.",
      price: 12.99,
      image: comboMeal1,
    },
    {
      title: "Spicy Chickpea Combo",
      description:
        "Spicy chickpea patty with kale slaw, baked zucchini chips, and a hibiscus iced tea.",
      price: 13.49,
      image: comboMeal2,
    },
    {
      title: "Green Power Combo",
      description:
        "Grilled veggie burger, avocado salad, and a green smoothie packed with nutrients.",
      price: 14.25,
      image: comboMeal3,
    },
  ];

  return (
    <section className="wrapper" id="combo-meal">
      <div className="wrapper__1920 section-combo-meal">
        <div className="wrapper__1920--content">
          <div className="section-how-to__container wrap__content">
            <div className="section-combo-meal__header">
              <h2 className="sub-heading__secondary">combo meals</h2>
              <h1 className="heading__secondary">
                Powered by 5,000+ carefully curated recipes
              </h1>
            </div>
            <div className="section-combo-meal__grid">
              {comboMeals.map((combo, index) => (
                <div key={index} className="section-combo-meal__card">
                  <img
                    src={combo.image}
                    alt={combo.title}
                    className="section-combo-meal__image"
                  />
                  <div className="section-combo-meal__content">
                    <h3 className="section-combo-meal__title">{combo.title}</h3>
                    <p className="section-combo-meal__description">
                      {combo.description}
                    </p>
                    <span className="section-combo-meal__price">
                      ${combo.price}
                    </span>
                    <div className="section-combo-meal__btn">
                      <button className="btn btn__full">Get Recipe</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-combo-meal__all-combos">
              <ButtonCTA
                ctaName={"See all combos"}
                classes={"link__text--primary"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
