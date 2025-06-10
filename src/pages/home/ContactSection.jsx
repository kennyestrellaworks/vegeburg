import { useState } from "react";
import burgerImage from "../../assets/images/featured-section-burger.png";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // console.log("formData ", formData);

  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 section-contact">
          <div className="wrapper__1920--content">
            <div className="section-contact__container">
              <div className="section-contact__box">
                <div className="section-contact__box-content">
                  <div className="section-contact__left">
                    <img src={burgerImage} alt="Burger image" />
                  </div>
                  <div className="section-contact__right">
                    <div className="section-contact__contact-form">
                      <form
                        className="section-contact__form"
                        onSubmit={handleSubmit}
                      >
                        <h1 className="heading__secondary">
                          Enjoy Your First Meal on Us!
                        </h1>

                        <label
                          className="section-contact__form-label"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          className="section-contact__form-input"
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                        />

                        <label
                          className="section-contact__form-label"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="section-contact__form-input"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="johnsmith@gmail.com"
                        />

                        <label
                          className="section-contact__form-label"
                          htmlFor="source"
                        >
                          Where did you hear from us?
                        </label>
                        <select
                          className="section-contact__form-select"
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          required
                        >
                          <option
                            className="section-contact__form-option"
                            value=""
                          >
                            -- Select an option --
                          </option>
                          <option
                            className="section-contact__form-option"
                            value="friends"
                          >
                            Friends and Family
                          </option>
                          <option
                            className="section-contact__form-option"
                            value="youtube"
                          >
                            YouTube
                          </option>
                          <option
                            className="section-contact__form-option"
                            value="facebook"
                          >
                            Facebook
                          </option>
                          <option
                            className="section-contact__form-option"
                            value="twitter"
                          >
                            Twitter
                          </option>
                        </select>

                        <label
                          className="section-contact__form-label"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="section-contact__form-input"
                          type="message"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message..."
                        ></textarea>

                        <button
                          className="btn btn__form section-contact__form-button"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
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
