import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Home page</p>
      <Link href={"users"}>Users</Link>
    </main>
  );
}
