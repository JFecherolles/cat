// Import NPM
import PropTypes from 'prop-types';

// Imports locaux
import './style.scss';

const Description = ({ steps }) => (
  <ol className="steps">
    {steps.map((description) => (
      <li key={description} className="step">
        {description}
      </li>
    ))}
  </ol>
);

// on valide nos props
Description.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Description;
