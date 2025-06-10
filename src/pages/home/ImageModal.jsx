export const ImageModal = ({
  imageList,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  direction,
}) => {
  if (currentIndex === null || !imageList.length) return null;

  const animationClass =
    direction === "left"
      ? "slide-in-left"
      : direction === "right"
      ? "slide-in-right"
      : null;

  const currentImage = imageList[currentIndex];

  console.log("currentIndex", currentIndex);

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal__container">
        <div
          className="image-modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="image-modal__content-wrapper">
            <div className="image-modal__slider-header">
              <div className="image-modal__slider-controls">
                <div className="image-modal__slider-left-right-buttons">
                  <button
                    className="btn__left-right-buttons image-modal__button-previous"
                    onClick={onPrev}
                    disabled={currentIndex > 0 ? false : true}
                  >
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_16)">
                        <path d="M143 46.45L89.8448 100L143 153.55L126.636 170L57 100L126.636 30L143 46.45Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_16">
                          <rect width="200" height="200" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button
                    className="btn__left-right-buttons image-modal__button-next"
                    onClick={onNext}
                    disabled={
                      currentIndex < imageList.length - 1 ? false : true
                    }
                  >
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M57 153.55L110.155 100L57 46.45L73.3644 30L143 100L73.3644 170L57 153.55Z" />
                    </svg>
                  </button>
                </div>

                <button
                  className="btn__left-right-buttons image-modal__button-close"
                  onClick={onClose}
                >
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M156.25 56.832L143.168 43.75L100 86.918L56.832 43.75L43.75 56.832L86.918 100L43.75 143.168L56.832 156.25L100 113.082L143.168 156.25L156.25 143.168L113.082 100L156.25 56.832Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="image-modal__slider">
              <div className="image-modal__image-container">
                <img
                  key={currentIndex}
                  className={`image-modal__image ${animationClass}`}
                  src={currentImage}
                  alt="Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
