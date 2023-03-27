import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

const Menu = () => {
  const chats = useSelector((state) => state.chats.list);
 
  return (
    <nav className="menu">
      <NavLink
        
        className={({ isActive }) => (
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        )}
        to="/"
      >
        Accueil
      </NavLink>

      <div className="menu-container">

      {chats.map((chat) => (
        <NavLink
          key={chat.id}
          className={({ isActive }) => (
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          )}
          to={`/chat/${chat.slug}`}
        >
          {chat.title}
        </NavLink>
      ))}
      </div>
    </nav>
  );
};

export default Menu;
