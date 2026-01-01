import styles from "./page.module.css";

  export default function Home() {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.intro}>
            <h1>Favicon Demo for Next.js App Router</h1>
            <p>
              Check your browser tab - you should see the custom favicon (letter "P" on black background).
              This demonstrates how to create a custom favicon using HTML + Chrome DevTools and implement it in Next.js App Router.
            </p>
            <p>
              <strong>What this shows:</strong> Black & white minimalist favicon design, created with HTML + Chrome DevTools,     
              using static favicon.ico aligned with post2video branding guidelines.
            </p>
          </div>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://github.com/NathanKr/post2video-favicon"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Tutorial
            </a>
          </div>
        </main>
      </div>
    );
  }
