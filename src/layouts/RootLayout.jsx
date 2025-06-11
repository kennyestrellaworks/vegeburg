import { NavLink, Outlet } from "react-router-dom";
import { ButtonCTA } from "../components/ButtonCTA";
import { useEffect, useState } from "react";
import { vegeBurgLogo } from "../assets";
import { Footer } from "../pages/home/Footer";

export const RootLayout = ({ reference }) => {
  const [dropdownNavActive, setDropdownNavActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const breakpointWidth = 950;

  // Browser resize event.
  useEffect(() => {
    const handleBrowserResize = () => {
      const browserWidth = window.innerWidth;
      // console.log("browserWidth ", browserWidth);
      setWindowWidth(browserWidth);
    };
    window.addEventListener("resize", handleBrowserResize);
    handleBrowserResize();
    return () => window.removeEventListener("resize", handleBrowserResize);
  }, []);

  // Allow scroll or not.
  useEffect(() => {
    // console.log("windowWidth ", windowWidth);
    if (windowWidth <= breakpointWidth && dropdownNavActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [windowWidth, dropdownNavActive]);

  // Open and close dropdown nav.
  const openAndCloseDropdownNav = () => {
    setDropdownNavActive((prev) => !prev);
  };

  // const openAndCloseDropdownNav = () => {
  //   setDropdownNavActive(() => {
  //     const clicked = !dropdownNavActive;
  //     setDropdownNavActive(clicked);
  //   });
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.remove("sticky");
        } else {
          document.body.classList.add("sticky");
        }
      },
      { threshold: 0.5 }
    );

    const checkAndObserve = () => {
      if (reference.current) {
        observer.observe(reference.current);
      } else {
        // Retry on the next animation frame (or slightly delayed)
        requestAnimationFrame(checkAndObserve);
      }
    };

    checkAndObserve();

    return () => {
      if (reference.current) {
        observer.unobserve(reference.current);
      }
    };
  }, []);

  // const handleStickyClassName = () => {
  //   if (document.body.classList.contains("sticky")) {
  //     document.body.classList.remove("sticky");
  //   }
  // };

  return (
    <>
      {/* Fixed header  */}
      <section className="wrapper">
        <div className="wrapper__1920">
          <div className="fixed">
            <div className="fixed__content">
              <header
                className={`header ${
                  dropdownNavActive === true ? "show-mobile-nav" : ""
                }`}
              >
                <NavLink to="/" className="header__logo">
                  <img
                    src={vegeBurgLogo}
                    alt=""
                    className="header__logo-image"
                  />
                </NavLink>
                <nav className="navbar">
                  <ul
                    className="navbar__list"
                    onClick={openAndCloseDropdownNav}
                  >
                    <li className="navbar__list-item">
                      <NavLink to="/" className="navbar__list-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="navbar__list-item">
                      <NavLink to="about" className="navbar__list-link">
                        About
                      </NavLink>
                    </li>
                    <li className="navbar__list-item">
                      <NavLink to="blog" className="navbar__list-link">
                        Blog
                      </NavLink>
                    </li>
                    <li className="navbar__list-item">
                      <NavLink to="contact" className="navbar__list-link">
                        Contact
                      </NavLink>
                    </li>
                    <li className="navbar__list-item">
                      <ButtonCTA
                        classes={"navbar__list-link navbar__cta"}
                        ctaName={"Sign up now!"}
                      />
                    </li>
                  </ul>
                </nav>
                <div className="btn__mobile-nav-wrap">
                  {dropdownNavActive === true ? (
                    ""
                  ) : (
                    <button
                      className="btn__mobile-nav"
                      onClick={openAndCloseDropdownNav}
                    >
                      <svg
                        className="btn__mobile-nav--icon btn__mobile-nav--icon-hamburger"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                      </svg>
                    </button>
                  )}

                  {dropdownNavActive === true ? (
                    <button
                      className="btn__mobile-nav"
                      onClick={openAndCloseDropdownNav}
                    >
                      <svg
                        className="btn__mobile-nav--icon btn__mobile-nav--icon-close"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <div ref={reference} style={{ height: "1px" }}></div>
      {/* Fixed header ends */}
      <Outlet />
      <Footer />
    </>
  );
};
