
import { Route, Routes } from 'react-router-dom';

import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Chat from 'src/components/Chat';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading }) {
 

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      
      <Routes>
        <Route
          path="/cat"
          
          element={<Home />}
        />

        
        <Route
          path="/chat/:slug"
          element={<Chat />}
        />

        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
