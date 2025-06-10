import { Rating } from "../../components/Rating";
import { persons } from "../../data/data";

export const TestimonialsSection = ({ images, onImageClick }) => {
  return (
    <>
      <section className="wrapper" id="testimonials">
        <div className="wrapper__1920 section-testimonials">
          <div className="section-testimonials__container">
            <div className="section-testimonials__box">
              <div className="section-testimonials__header">
                <h2 className="sub-heading__secondary">testimonials</h2>
                <h1 className="heading__secondary">
                  Once you try it, you can't go back
                </h1>
              </div>
              <div className="section-testimonials__content">
                {persons.map((person, index) => {
                  return (
                    <figure key={index} className="section-testimonials__item">
                      <div className="section-testimonials__item-header">
                        <img
                          className="section-testimonials__image"
                          alt={`Photo of ${person.fullName}`}
                          src={person.image}
                        />
                        <div className="section-testimonials__item-rating">
                          <p className="section-testimonials__person-name">
                            {person.fullName}
                          </p>
                          <div className="section-testimonials__item-rating-stars">
                            <Rating rating={person.rating} />
                          </div>
                          <p className="section-testimonials__item-rating-paragraph">
                            {person.rating}
                          </p>
                        </div>
                      </div>
                      <blockquote className="section-testimonials__text">
                        {person.feedback}
                      </blockquote>
                    </figure>
                  );
                })}
              </div>
            </div>

            <div className="section-testimonials__gallery-wrapper">
              <div className="section-testimonials__gallery-heading">
                <h1 className="heading__secondary">
                  Check some moments of happy people!
                </h1>
              </div>
              <div className="section-testimonials__gallery">
                {images.map((item, index) => {
                  return (
                    <figure
                      key={index}
                      className="section-testimonials__gallery-item"
                    >
                      <img
                        className="section-testimonials__gallery-image"
                        src={item}
                        alt={item}
                        onClick={() => onImageClick(index)}
                      />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="wrapper__1920--content"></div>
        </div>
      </section>
    </>
  );
};
