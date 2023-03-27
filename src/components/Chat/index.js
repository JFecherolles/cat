
// == Import : npm
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Description from './Description';

import { findCat } from '../../selectors/chats';

// Style
import './style.scss';

// == Composant
function Chat() {
  
  const { slug } = useParams();
  

  const chat = useSelector((state) => (
    findCat(state.chats.list, slug)
    
  ));

  if (!chat) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="chat">
        <Header
          name={chat.title}
          thumbnail={chat.thumbnail}
          origine={chat.origine}
          description={chat.description}
        />
        <Description
          steps={chat.description}
        />
      </div>
    </Page>
  );
}

// == Export
export default Chat;
