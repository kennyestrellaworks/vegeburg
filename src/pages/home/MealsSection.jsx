import { meal1, meal2 } from "../../assets";
import { ButtonCTA } from "../../components/ButtonCTA";

export const MealsSection = () => {
  return (
    <>
      <section className="wrapper" id="meals">
        <div className="wrapper__1920 section-meals">
          <div className="wrapper__1920--content">
            <section className="section-meals__container wrap__content">
              <div className="section-meals__header">
                <h2 className="sub-heading__secondary">meals</h2>
                <h1 className="heading__secondary">
                  Omnifood AI chooses from 5,000+ recipes
                </h1>
              </div>
              <div className="section-meals__box grid grid--3-cols margin-bottom-md">
                <div className="section-meals__meal">
                  <img
                    src={meal1}
                    className="section-meals__meal-image"
                    alt="Japanese Gyozas"
                  />
                  <div className="section-meals__meal-content">
                    <div className="section-meals__meal-tags">
                      <span className="section-meals__tag section-meals__tag--vegetarian">
                        Vegetarian
                      </span>
                    </div>
                    <p className="section-meals__meal-title">Japanese Gyozas</p>
                    <ul className="section-meals__meal-attributes">
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="flame-outline"
                          role="img"
                          aria-label="flame outline"
                        ></ion-icon>
                        <span>
                          <strong>650</strong> calories
                        </span>
                      </li>
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="restaurant-outline"
                          role="img"
                          aria-label="restaurant outline"
                        ></ion-icon>
                        <span>
                          NutriScore ® <strong>74</strong>
                        </span>
                      </li>
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="star-outline"
                          role="img"
                          aria-label="star outline"
                        ></ion-icon>
                        <span>
                          <strong>4.9</strong> rating (537)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="section-meals__meal">
                  <img
                    src={meal2}
                    className="section-meals__meal-image"
                    alt="Japanese Gyozas"
                  />
                  <div className="section-meals__meal-content">
                    <div className="section-meals__meal-tags">
                      <span className="section-meals__tag section-meals__tag--vegan">
                        Vegan
                      </span>
                      <span className="section-meals__tag section-meals__tag--paleo">
                        Paleo
                      </span>
                    </div>
                    <p className="section-meals__meal-title">Avocado Salad</p>
                    <ul className="section-meals__meal-attributes">
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="flame-outline"
                          role="img"
                          aria-label="flame outline"
                        ></ion-icon>
                        <span>
                          <strong>400</strong> calories
                        </span>
                      </li>
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="restaurant-outline"
                          role="img"
                          aria-label="restaurant outline"
                        ></ion-icon>
                        <span>
                          NutriScore ® <strong>92</strong>
                        </span>
                      </li>
                      <li className="section-meals__meal-attribute-item">
                        <ion-icon
                          className="section-meals__meal-icon section-meals__hydrated"
                          name="star-outline"
                          role="img"
                          aria-label="star outline"
                        ></ion-icon>
                        <span>
                          <strong>4.8</strong> rating (441)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-meals__diets">
                  <h3 className="heading__tertiary">Works with any diet:</h3>
                  <ul className="section-meals__list list__primary">
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Vegetarian</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Vegan</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Pescatarian</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Gluten-free</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Lactose-free</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Keto</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Paleo</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Low FODMAP</span>
                    </li>
                    <li className="section-meals__list-item list__primary-item">
                      <ion-icon
                        className="list__primary-list-icon md hydrated"
                        name="checkmark-outline"
                        role="img"
                        aria-label="checkmark outline"
                      ></ion-icon>
                      <span>Kid-friendly</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section-meals__all-recipes">
                <ButtonCTA
                  ctaName={"See all recipes"}
                  classes={"link__text--primary"}
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
