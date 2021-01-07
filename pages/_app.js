import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import Navigation from "../components/Navigation";

import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <div className={styles.appContainer} key={router.route}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
