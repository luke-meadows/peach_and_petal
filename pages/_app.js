import '../styles/globals.css';
import '../public/fontello/css/fontello.css';
import Header from '../components/header/Header';
import Chat from '../components/home/Chat';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Header />
      <Component {...pageProps} />
      <Chat />
    </div>
  );
}

export default MyApp;
