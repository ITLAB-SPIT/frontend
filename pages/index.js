import Head from "next/head";
import Image from "next/image";
import { Login } from "./login";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Interview Experiences</title>
        <meta
          name="description"
          content="Crack your interviews easily with interview bit.Its a one stop application which provides all the necessary information one needss to crack thier dream company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>Hi guyz i have started it,</main> */}
      <main>Hi guyz i have started it,</main>
    </div>
  );
}
