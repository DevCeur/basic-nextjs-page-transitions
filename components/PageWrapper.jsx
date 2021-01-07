import Head from "next/head";

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>My Website - {title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default PageWrapper;
