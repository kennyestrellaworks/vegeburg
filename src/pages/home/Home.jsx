import { ComboMeal } from "./ComboMeal";
import { ContactSection } from "./ContactSection";
// import { FeaturedSection } from "./FeaturedSection";
import { Features2Section } from "./Features2Section";
import { HeroSection } from "./HeroSection";
import { HowToSection } from "./HowToSection";
import { Packages } from "./Packages";
// import { MealsSection } from "./MealsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { images } from "../../data/data";
import { ImageModal } from "./ImageModal";
import { useEffect, useState } from "react";

export const Home = ({ reference }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [slideFrom, setSlideFrom] = useState(null);

  // console.log("reference", reference);

  const handlePrev = () => {
    setSlideFrom("left");
    setSelectedIndex((i) => (i > 0 ? i - 1 : i));
  };

  const handleNext = () => {
    setSlideFrom("right");
    setSelectedIndex((i) => (i < images.length - 1 ? i + 1 : i));
  };

  const handleClose = () => {
    setSlideFrom(null);
    setSelectedIndex(null);
  };

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Optional: cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  return (
    <>
      <HeroSection reference={reference} />
      {/* <FeaturedSection /> */}
      <HowToSection />
      {/* <MealsSection /> */}
      <ComboMeal />
      <Features2Section />
      <TestimonialsSection
        images={images}
        onImageClick={(index) => setSelectedIndex(index)}
      />
      <ImageModal
        imageList={images}
        currentIndex={selectedIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        direction={slideFrom}
      />
      <Packages />
      <ContactSection />
    </>
  );
};
