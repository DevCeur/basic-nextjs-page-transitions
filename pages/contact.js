import PageWrapper from "../components/PageWrapper";

import styles from "../styles/Page.module.css";

export default function Contact() {
  return (
    <PageWrapper title="Contact">
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Contact</h1>
        <p className={styles.pageContent}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </PageWrapper>
  );
}
