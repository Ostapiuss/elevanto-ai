import Main from '@components/main';
import { Header } from '@components/header';

import './style.scss';
import Footer from '@components/footer';
import FloatingButton from '@shared/components/FloatingButton';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
