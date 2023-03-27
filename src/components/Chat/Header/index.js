// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = ({
  name, thumbnail, origine,
}) => (
  <header className="presentation">
    <img
      src={thumbnail}
      alt="Image"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{name}</h1>
      <p className="presentation-infos">{origine}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  origine: PropTypes.string.isRequired,
  
  
};

// == Export
export default Header;
