import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  thumbnail,
  title,
  origine,
  slug,
  
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Origine : {origine}</p>
      <Link to={`/chat/${slug}`} className="card-link">Voir le chat</Link>
    </div>
  </article>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  origine: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  
};

export default Card;
