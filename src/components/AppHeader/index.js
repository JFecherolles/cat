import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

import './style.scss';

const AppHeader = () => (
  <header className="header">
    <Link to="/cat">
      <img src={logo} className="header-logo" alt="Logo patte chat" />
    </Link>
  </header>
);

export default AppHeader;
