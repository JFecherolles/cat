import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Error = () => (
  <Page>
    <AppHeader />
    <Content
      title="Erreur"
      text="La page que vous recherchez semble introuvable."
    />
  </Page>
);

export default Error;
