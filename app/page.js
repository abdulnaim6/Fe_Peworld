"use client"
import Agency from "@/public/assets/agency.png"
import Image from "next/image";
import Link from "next/link";
import Styles from "@/style.module.css";
import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main>
        <div>
          <Navbar/>
        </div>
        <section style={{ display: "flex" }} className={Styles.content}>
          <div>
            <h1>
              Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
            </h1>
            <p>
              Cari tanlenta terbaik agar anda dapat berkembang di era industri
              digital ini
            </p>
            <button type="submit">
              <Link href="/main/home">Mulai Dari Sekarang</Link>
            </button>
          </div>
          <div className={Styles.contentimg}>
            <Image
              src={Agency}
              alt="picture agency"
              width={300}
              height={300}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
