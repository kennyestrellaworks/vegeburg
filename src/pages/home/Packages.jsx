import { useState } from "react";
import { plans } from "../../data/data";

export const Packages = () => {
  const [activePackage, setActivePackage] = useState("monthly");

  const switchPackage = (selectedPackage) => {
    setActivePackage(selectedPackage);
  };

  const filteredPlan = plans.filter((item) => item.type === activePackage);
  //   console.log("filteredPlan ", filteredPlan);

  return (
    <section className="wrapper" id="packages">
      <div className="wrapper__1920 section-packages">
        <div className="wrapper__1920--content">
          <div className="section-packages__header">
            <h2 className="sub-heading__secondary">packages</h2>
            <h1 className="heading__secondary">
              Eating well without breaking the bank
            </h1>
            <div className="section-packages__buttons">
              <button
                className={`btn btn__fullv2 ${
                  activePackage === "monthly" ? "active" : ""
                }`}
                onClick={() => switchPackage("monthly")}
              >
                Monthly
              </button>
              <button
                className={`btn btn__fullv2 ${
                  activePackage === "annually" ? "active" : ""
                }`}
                onClick={() => switchPackage("annually")}
              >
                Annually
              </button>
            </div>
          </div>
          <div className="section-packages__content">
            <div className="section-packages__content-container">
              {filteredPlan.map((plan, index) => (
                <div className="section-packages__content-card" key={index}>
                  <h2 className="section-packages__content-heading">
                    {plan.title}
                  </h2>
                  <p className="section-packages__content-price">
                    <span>$</span>
                    {plan.price}
                  </p>
                  <p className="section-packages__content-description">
                    {plan.description}
                  </p>
                  <ul className="section-packages__content-list">
                    {plan.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="section-packages__content-list-item"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="section-packages__btn">
                    <button className="btn btn__full">Select Plan</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
