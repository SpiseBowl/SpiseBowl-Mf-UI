import PropTypes from "prop-types";

const RenderIf = ({ render, children }) => (render ? children : null);
export default RenderIf;

RenderIf.propTypes = {
  render: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
