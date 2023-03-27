import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text, chats }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {chats && (
      <div className="content-list">
        {chats.map((chat) => (
          <Card key={chat.id} {...chat} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  recipes: null,
};

export default Content;
