import PageWrapper from "../components/PageWrapper";

import styles from "../styles/Page.module.css";

export default function About() {
  return (
    <PageWrapper title="About">
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>About</h1>
        <p className={styles.pageContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p className={styles.pageContent} style={{ marginTop: 24 }}>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </p>
      </div>
    </PageWrapper>
  );
}
