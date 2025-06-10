import { vegeBurgLogo } from "../../assets";
const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <>
      <section className="wrapper">
        <footer className="wrapper__1920 footer">
          <div className="wrapper__1920--content">
            <div className="footer__container wrap__content">
              <div className="footer__grid grid">
                <div className="footer__logo-box">
                  <a href="#" className="footer__logo">
                    <img
                      className="footer__logo-image"
                      alt="VegeBurg logo"
                      src={vegeBurgLogo}
                    />
                  </a>
                  <ul className="footer__social">
                    <li>
                      <a className="footer__social-link" href="#">
                        <ion-icon
                          className="footer__social-link-icon"
                          name="logo-instagram"
                        ></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a className="footer__social-link" href="#">
                        <ion-icon
                          className="footer__social-link-icon"
                          name="logo-facebook"
                        ></ion-icon>
                      </a>
                    </li>
                    <li>
                      <a className="footer__social-link" href="#">
                        <ion-icon
                          className="footer__social-link-icon"
                          name="logo-twitter"
                        ></ion-icon>
                      </a>
                    </li>
                  </ul>
                  <p className="footer__copyright">
                    Copyright &copy; {currentYear} by VegeBurg, Inc. All rights
                    reserved.
                  </p>
                </div>

                <div className="footer__address-col">
                  <p className="footer__link-heading">Contact us</p>
                  <address className="footer__text">
                    <p className="footer__address">
                      623 Harrison St., 2nd Floor, San Francisco, CA 94107
                    </p>
                    <p>
                      <a className="footer__link" href="tel:415-201-6370">
                        415-201-6370
                      </a>
                      <br />
                      <a
                        className="footer__link"
                        href="mailto:hello@vegeburg.com"
                      >
                        hello@vegeburg.com
                      </a>
                    </p>
                  </address>
                </div>

                <nav className="footer__nav">
                  <p className="footer__link-heading">Account</p>
                  <ul className="footer__nav-item">
                    <li>
                      <a className="footer__link" href="#">
                        Create account
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        iOS app
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Android app
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="footer__nav">
                  <p className="footer__link-heading">Company</p>
                  <ul className="footer__nav-item">
                    <li>
                      <a className="footer__link" href="#">
                        About VegeBurg
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        For Business
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Cooking partners
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="footer__nav">
                  <p className="footer__link-heading">Resources</p>
                  <ul className="footer__nav-item">
                    <li>
                      <a className="footer__link" href="#">
                        Recipe directory
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Help center
                      </a>
                    </li>
                    <li>
                      <a className="footer__link" href="#">
                        Privacy & terms
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
