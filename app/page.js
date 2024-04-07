import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <br></br>
        <button></button>
        <h1><a href="/login">Login</a></h1>
        
        <h1><a href="/about">About</a></h1>

        <h1><a href="/register">Register</a></h1>

        <h1><a href="/companies">Companies</a></h1>

        <p>Get started by editing </p>
        <div>    
        </div>
      </div>
    </main>
  );
}
