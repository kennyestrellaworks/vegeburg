import { useState } from "react";
import { businessOwnersPicture } from "../../assets";

export const Contact = () => {
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
        <div className="wrapper__1920 contact">
          <div className="wrapper__1920--content">
            <div className="contact__container">
              <div className="contact__box">
                <div className="contact__box-content">
                  <div className="contact__left">
                    <img src={businessOwnersPicture} alt="Burger image" />
                  </div>
                  <div className="contact__right">
                    <div className="contact__contact-form">
                      <form className="contact__form" onSubmit={handleSubmit}>
                        <h1 className="heading__secondary">
                          Enjoy Your First Meal on Us!
                        </h1>

                        <label
                          className="contact__form-label"
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <input
                          className="contact__form-input"
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                        />

                        <label className="contact__form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="contact__form-input"
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="johnsmith@gmail.com"
                        />

                        <label className="contact__form-label" htmlFor="source">
                          Where did you hear from us?
                        </label>
                        <select
                          className="contact__form-select"
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          required
                        >
                          <option className="contact__form-option" value="">
                            -- Select an option --
                          </option>
                          <option
                            className="contact__form-option"
                            value="friends"
                          >
                            Friends and Family
                          </option>
                          <option
                            className="contact__form-option"
                            value="youtube"
                          >
                            YouTube
                          </option>
                          <option
                            className="contact__form-option"
                            value="facebook"
                          >
                            Facebook
                          </option>
                          <option
                            className="contact__form-option"
                            value="twitter"
                          >
                            Twitter
                          </option>
                        </select>

                        <label
                          className="contact__form-label"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="contact__form-input"
                          type="message"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Your message..."
                        ></textarea>

                        <button
                          className="btn btn__form contact__form-button"
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
