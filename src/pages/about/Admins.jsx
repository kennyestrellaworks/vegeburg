import { admins } from "../../data/data";

export const Admins = () => {
  return (
    <>
      <section className="wrapper">
        <div className="wrapper__1920 admin-section">
          <div className="wrapper__1920--content">
            <div className="admin-section__container">
              <div className="admin-section__heading">
                <h1 className="heading__secondary">Our Team</h1>
                <p className="about-page__paragraph">
                  What makes burgers truly tasty is the love and care chefs put
                  into making them.
                </p>
              </div>
              <div className="admin-section__team">
                {admins.map((admin, index) => {
                  return (
                    <div key={index} className="admin-section__card">
                      <img
                        src={admin.image}
                        alt={admin.fullName}
                        className="admin-section__team-picture"
                      />
                      <p className="about-page__paragraph">{admin.fullName}</p>
                      <p className="about-page__paragraph-2">{admin.role}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
