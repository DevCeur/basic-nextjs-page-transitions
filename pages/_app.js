import "../styles/globals.css";

import Navigation from "../components/Navigation";

import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <div className={styles.appContainer}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
