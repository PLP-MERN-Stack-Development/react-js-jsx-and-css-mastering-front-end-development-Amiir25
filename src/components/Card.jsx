import PropTypes from "prop-types";

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
