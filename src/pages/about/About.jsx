import { businessOwnersPicture } from "../../assets";
import { Admins } from "./Admins";
import { FoodExcellence } from "./FoodExcellence";

export const About = () => {
  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 about-page">
          <div className="wrapper__1920--content">
            <div className="about-page__container">
              <div className="about-page__hero">
                <div className="about-page__hero-container">
                  <div className="about-page__hero-left">
                    <img
                      className="about-page__hero-owners-picture"
                      src={businessOwnersPicture}
                      alt={businessOwnersPicture}
                    />
                  </div>
                  <div className="about-page__hero-right">
                    <h1 className="about-page__heading heading__primary">
                      Our Story
                    </h1>
                    <p className="about-page__paragraph">
                      Marie Burgmann and James Burgmann's journey began with a
                      simple yet passionate mission: to create mouthwatering
                      vegan burgers that didn’t compromise on taste, ethics, or
                      quality. As longtime vegans and food lovers, they
                      struggled to find plant-based options that were both
                      satisfying and accessible. So, in 2019, armed with
                      determination and a handful of homemade recipes, they
                      launched their very first vegan burger stand. It was a
                      humble beginning — just the two of them, a food cart, and
                      an unwavering belief that great food can also be kind.
                    </p>
                    <p className="about-page__paragraph">
                      Word quickly spread about their juicy, flavorful burgers
                      made entirely from plants, and what started as a local
                      favorite quickly grew into a community staple. Their
                      dedication to freshness, sustainability, and inclusivity
                      attracted not only loyal customers but also aspiring
                      entrepreneurs. With strong values and a growing demand,
                      Marie and James expanded their dream, opening doors for
                      others through franchising. Today, their brand proudly
                      operates 10 franchise locations — each one staying true to
                      the original vision: bold flavor, cruelty-free
                      ingredients, and a burger experience everyone can enjoy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Admins />
      <FoodExcellence />
    </>
  );
};
