import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="px-4 text-center md:mr-10 mb-2 hover:bg-amber-600">
      <a className="" href={route.path}>
        {route.name}
      </a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.objecet,
};
export default Link;
