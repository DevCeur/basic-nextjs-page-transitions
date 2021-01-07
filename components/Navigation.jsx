import Link from "next/link";

import styles from "../styles/Navigation.module.css";

const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
];

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      {links.map((link) => (
        <Link key={link.text} href={link.path}>
          <a className={styles.link}>{link.text}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
