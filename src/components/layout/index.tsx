import Main from '@components/main';
import { Header } from '@components/header';

import './style.scss';
import Footer from '@components/footer';

export function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
      <Footer />
    </div>
  );
}
