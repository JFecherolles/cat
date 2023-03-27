import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = () => {
  const chats = useSelector((state) => state.chats.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les race de chats"
        text="Voici toutes les races de chats."
        chats={chats}
      />
    </Page>
  );
};

export default Home;
