import { Link } from "react-router-dom";

export const ButtonCTA = ({ ctaName, classes, to }) => {
  return (
    <Link to={to} className={classes}>
      {ctaName}
    </Link>
  );
};
