import Head from "next/head";
import { motion } from "framer-motion";

const pageWrapperVariants = {
  hidden: { opacity: 0, translateX: -5 },
  visible: { opacity: 1, translateX: 0 },
  exited: { opacity: 0, translateX: 5 },
};

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>My Website - {title}</title>
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exited"
        variants={pageWrapperVariants}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
