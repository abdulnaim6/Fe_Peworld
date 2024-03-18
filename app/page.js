"use client";
import Agency from "@/public/assets/agency.png";
import Image from "next/image";
import Link from "next/link";
import Styles from "@/style.module.css";
import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import img from "@/public/assets/peworld4.jpeg";
import icon from "@/public/assets/ceklis.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <main>
        <div>
          <Navbar />
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
            <Image src={Agency} alt="picture agency" width={400} height={400} />
          </div>
        </section>

        <section style={{ display: "flex" }} className={Styles.content}>
          <div className={Styles.contentimg}>
            <Image src={img} alt="picture agency" width={450} height={450} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div className={Styles.content2}>
              <h1>Kenapa harus mencari talent di peworld</h1>
              <div className={Styles.cek}>
                <Image src={icon} alt="ceklis" width={25} height={25} />
                <p>Memiliki banyak pilihan talent.</p>
              </div>
              <div className={Styles.cek}>
                <Image src={icon} alt="ceklis" width={25} height={25} />
                <p>Skills yang dibutuhkan sesuai dengan industri.</p>
              </div>
              <div className={Styles.cek}>
                <Image src={icon} alt="ceklis" width={25} height={25} />
                <p>Profesional.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: "flex" }} className={Styles.endcontent}>
          <h4>
            Segera <br /> bergabung
          </h4>
          <button type="submit">
            <Link href="/">Mulai Dari Sekarang</Link>
          </button>
        </section>

        <Footer />
      </main>
    </>
  );
}
